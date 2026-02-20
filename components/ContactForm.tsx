"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import { getAppCheckToken } from "@/src/services/firebase-client";
import {
  getClientTrackingContext,
  trackContactFormError,
  trackContactFormSubmit,
  trackEvent,
} from "@/src/lib/analytics";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setErrorMessage(null);
    const submitStartedAt = Date.now();
    const subject = values.subject || "Unknown";

    trackEvent("contact_form_attempt", {
      event_category: "Contact",
      event_label: subject,
    });

    try {
      // const appCheckToken = await getAppCheckToken();

      // if (!appCheckToken) {
      //   throw new Error(
      //     "Unable to verify security context. Please refresh the page."
      //   );
      // }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "X-Firebase-AppCheck": appCheckToken,
        },
        body: JSON.stringify({
          ...values,
          trackingContext: getClientTrackingContext(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      // Track successful form submission in Google Analytics
      trackContactFormSubmit(subject);
      trackEvent("contact_form_success", {
        event_category: "Contact",
        event_label: subject,
        duration_ms: Date.now() - submitStartedAt,
      });

      setIsSent(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      trackContactFormError(
        subject,
        error instanceof Error ? error.message.slice(0, 120) : "unknown_error"
      );
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSent) {
    return (
      <div className="bg-zinc-900 p-12 rounded-3xl border border-zinc-800 h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <Send className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-zinc-400">
          Thank you for contacting Rolls Nation. We will get back to you
          shortly.
        </p>
        <Button
          variant="ghost"
          onClick={() => setIsSent(false)}
          className="mt-8 text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10 font-bold uppercase text-sm tracking-wider"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800">
      <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-yellow-500 font-bold uppercase tracking-wider">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="bg-black border-zinc-800 focus-visible:ring-yellow-500 text-white h-14"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              disabled={isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-yellow-500 font-bold uppercase tracking-wider">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+91 98765 43210"
                      type="tel"
                      className="bg-black border-zinc-800 focus-visible:ring-yellow-500 text-white h-14"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-yellow-500 font-bold uppercase tracking-wider">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    className="bg-black border-zinc-800 focus-visible:ring-yellow-500 text-white h-14"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-yellow-500 font-bold uppercase tracking-wider">
                  Subject
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-black border-zinc-800 text-white focus:ring-yellow-500 h-14">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                    <SelectItem value="General Inquiry">
                      General Inquiry
                    </SelectItem>
                    <SelectItem value="Franchise Opportunity">
                      Franchise Opportunity
                    </SelectItem>
                    <SelectItem value="Feedback / Complaint">
                      Feedback / Complaint
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-yellow-500 font-bold uppercase tracking-wider">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How can we help you?"
                    className="bg-black border-zinc-800 focus-visible:ring-yellow-500 text-white min-h-30 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {errorMessage && (
            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-lg">
              <AlertCircle size={16} />
              <p>{errorMessage}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-yellow-500 hover:bg-yellow-600 disabled:bg-zinc-700 disabled:text-zinc-500 text-black font-bold text-base uppercase tracking-wider transition-all hover:scale-[1.02]"
          >
            {isSubmitting ? (
              <>
                Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

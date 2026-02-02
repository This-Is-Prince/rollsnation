import { getFirestore } from "./firebase-server";

export const franchisesCol = getFirestore().collection('franchises');
export const usersCol = getFirestore().collection('users');
export const queriesCol = getFirestore().collection('queries');
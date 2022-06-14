import { useEffect } from "react"
import { useDocumentData } from "react-firebase-hooks/firestore"
import { signInAnonymously } from "@firebase/auth"
import { getFirestore, doc } from "@firebase/firestore"
import { firebaseApp, auth } from "@/lib/firebase"

const db = getFirestore(firebaseApp)

export function useTracking() {
  useEffect(() => {
    signInAnonymously(auth).catch(err => console.error(err))
  }, [])
}

export function useTrackedValue() {
  return useDocumentData(doc(db, "counter", "counter"))
}

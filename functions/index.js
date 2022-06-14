const admin = require("firebase-admin")
const functions = require("firebase-functions")

admin.initializeApp({ projectId: "intel-aws-reinvent-1904" })

exports.updateGoals = functions.auth.user().onCreate(async user => {
  try {
    const GOAL = 30000
    const INCREMENT = 50

    const db = admin.firestore()
    await db
      .doc("counter/counter")
      .update({ count: admin.firestore.FieldValue.increment(1) })

    const ref = await db.doc("counter/counter").get()
    const counter = ref.data()

    const total = Math.min(GOAL, counter.count * INCREMENT)
    const percent = total / GOAL

    await db.doc("counter/counter").update({ total, percent })
  } catch (err) {
    console.error(err)
  }
})

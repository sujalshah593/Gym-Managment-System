"use client"
import { createContext, useContext, useState } from "react"

const RevenueContext = createContext(undefined)

export function RevenueProvider({ children }) {
  const [purchases, setPurchases] = useState([])

  const addPurchase = (purchase) => {
    const newPurchase = {
      ...purchase,
      id: Date.now().toString(),
      date: new Date(),
    }
    setPurchases((prev) => [...prev, newPurchase])
  }

  const getTotalRevenue = () => {
    return purchases.reduce((total, purchase) => total + purchase.price, 0)
  }

  const getMembershipCounts = () => {
    return purchases.reduce(
      (counts, purchase) => {
        const planName = purchase.planName.toLowerCase()
        if (planName.includes("essential")) counts.essential++
        else if (planName.includes("elite")) counts.elite++
        else if (planName.includes("champion")) counts.champion++
        return counts
      },
      { essential: 0, elite: 0, champion: 0 }
    )
  }

  return (
    <RevenueContext.Provider value={{ purchases, addPurchase, getTotalRevenue, getMembershipCounts }}>
      {children}
    </RevenueContext.Provider>
  )
}

export function useRevenue() {
  const context = useContext(RevenueContext)
  if (!context) {
    throw new Error("useRevenue must be used within a RevenueProvider")
  }
  return context
}

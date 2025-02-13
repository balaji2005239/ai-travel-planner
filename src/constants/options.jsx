export const SelectTravelersList = [
    { id: 1, title: "Just Me", desc: "Embark on a solo adventure", icon: "🤵", people: "1" },
    { id: 2, title: "Couple", desc: "Romantic getaway for two", icon: "🧑‍🤝‍🧑", people: "2" },
    { id: 3, title: "Family", desc: "Fun-filled family vacation", icon: "👨‍👩‍👧‍👦", people: "3-5" },
    { id: 4, title: "Friends", desc: "For the lore", icon: "🫂", people: "5-8" }
];

export const SelectBudgetOptions = [
    { id: 1, title: "Budget", desc: "Explore on a shoestring budget", icon: "💵" },
    { id: 2, title: "Mid-Range", desc: "Balanced comfort and cost", icon: "💰" },
    { id: 3, title: "Luxury", desc: "Indulge in opulent experiences", icon: "💸" }
];

export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveller} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating Time  travel each of the location for 3 days with each day plan with best time to visit in JSON format.";
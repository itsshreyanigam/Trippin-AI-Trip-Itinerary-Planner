//import { title } from "process"

export const SelectTravelersList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A solo traveler exploring the world',
        icon: '🌍',
        people: '1 Person'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travelers enjoying the journey together',
        icon: '💑',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A fun-loving group on an adventure',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A group of thrill-seekers ready for fun',
        icon: '🎉',
        people: '3+ People'
    }
];

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Budget-Friendly',
        desc: 'Travel smart and save on costs',
        icon: '💳'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'A balance between comfort and cost',
        icon: '🏨'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Indulge in premium experiences',
        icon: '🌟'
    }
];


export const AI_PROMPT='Generate Travel Plan for Location:{location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions, and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time(opening and closing range like 10:00Am to 11:00 PM )  and also time taken to travel, to visit in JSON formate';
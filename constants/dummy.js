export const account = {
    balance: "1,924.33",
    pending: "2,368.14",
};

export const transact = [
    {
        id: 1,
        date: "21 OCT, 2022",
        day: "Today",
        currency: "Bitcoin",
        code: "BTC",
        image: require("../assets/images/Biz3.png"),
        amount: "29,455.74",
        changes: "+7.24%",
        type: "I",      // I - Increased, D - Decreased
        description: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.",
    
        data: [
            {
                id: 1,
                image: require("../assets/images/Biz1.jpeg"),
                description: "Super Glue Store Melbourne Central",
                amount: "$53.00",
                location: "Melbourne, VIC",
                type: "S",      // S - Sold, B - Bought
                date: "13:07"
            },
            {
                id: 2,
                image: require("../assets/images/Biz2.png"),
                description: "Mcdonalds Victoria Market Shop",
                amount: "$41.19",
                location: "Melbourne, VIC",
                type: "B",
                date: "14:20"
            },
            {
                id: 3,
                image: require("../assets/images/Biz3.png"),
                description: "Coles Melbourne Central Essential Shop",
                amount: "$42.00",
                location: "Melbourne, VIC",
                type: "S",
                date: "14:22 12 Apr"
            },
        ]
    },
    {
        id: 2,
        date: "20 OCT, 2022",
        day: "Yesterday",
        location: "Melbourne, VIC",
        code: "ETH",
        image: require("../assets/images/Biz4.jpeg"),
        amount: "919.03",
        changes: "-0.73%",
        type: "D",
        description: "Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain.",
    
        data: [
            {
                id: 1,
                image: require("../assets/images/Biz4.jpeg"),
                description: "Sold Ethereum",
                amount: "$39.24",
                location: "Melbourne, VIC",
                type: "S",      // S - Sold, B - Bought
                date: "08:07"
            },
            {
                id: 2,
                image: require("../assets/images/Biz3.png"),
                description: "Bought Ethereum",
                amount: "$53.00",
                location: "Melbourne, VIC",
                type: "B",
                date: "08:20"
            },
            {
                id: 3,
                image: require("../assets/images/Biz2.png"),
                description: "Sold Ethereum",
                amount: "$34.19",
                location: "Melbourne, VIC",
                type: "S",
                date: "14:20"
            },
        
        ]
    },
   
]

export const transactionHistory = [
    {
        id: 1,
        description: "Sold Ethereum",
        amount: -2.0034,
        location: "Melbourne, VIC",
        type: "S",      // S - Sold, B - Bought
        date: "14:20 12 Apr"
    },
    {
        id: 2,
        description: "Bought Ethereum",
        amount: 2.0034,
        location: "Melbourne, VIC",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 3,
        description: "Sold Ethereum",
        amount: -2.0034,
        location: "Melbourne, VIC",
        type: "S",
        date: "14:20 12 Apr"
    },
    {
        id: 4,
        description: "Bought Ethereum",
        amount: 2.0034,
        location: "Melbourne, VIC",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 5,
        description: "Bought Ethereum",
        amount: 2.0034,
        location: "Melbourne, VIC",
        type: "B",
        date: "14:20 12 Apr"
    },

    {
        id: 6,
        description: "Bought Ethereum",
        amount: 2.0034,
        location: "Melbourne, VIC",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 7,
        description: "Bought Ethereum",
        amount: 2.0034,
        location: "Melbourne, VIC",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 8,
        description: "Bought Ethereum",
        amount: 2.0034,
        location: "Melbourne, VIC",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 9,
        description: "Bought Ethereum",
        amount: 2.0034,
        location: "Melbourne, VIC",
        type: "B",
        date: "14:20 12 Apr"
    },
];

const chartOptions = [
    {
        id: 1,
        label: "1 hr"
    },
    {
        id: 2,
        label: "3 Days"
    },
    {
        id: 3,
        label: "1 Week"
    },
    {
        id: 4,
        label: "1 Month"
    },
    {
        id: 5,
        label: "3 Months"
    }
]

const dummyData = { account, transact, transactionHistory, chartOptions };

export default dummyData;
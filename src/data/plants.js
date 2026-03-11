import snakePlantImg from '../assets/plants/snake-plant.jpg';
import spiderPlantImg from '../assets/plants/spider-plant.jpg';
import peaceLilyImg from '../assets/plants/lilly.jpg';
import jasmineImg from '../assets/plants/jasmine.jpg';
import mintImg from '../assets/plants/mint.jpg';
import pothosImg from '../assets/plants/pothos.jpg';

export const plants = [
    {
        category: "Air Purifying Plants",
        items: [
            {
                id: 1,
                name: "Snake Plant",
                price: 25,
                description: "Nearly indestructible, this plant clears the air of toxins.",
                image: snakePlantImg,
            },
            {
                id: 2,
                name: "Spider Plant",
                price: 15,
                description: "Produces oxygen and filters harmful gases from the air.",
                image: spiderPlantImg,
            },
            {
                id: 3,
                name: "Peace Lily",
                price: 30,
                description: "Elegant white flowers that neutralize indoor air pollutants.",
                image: peaceLilyImg,
            }
        ]
    },
    {
        category: "Aromatic Fragrant Plants",
        items: [
            {
                id: 4,
                name: "Lavender",
                price: 20,
                description: "Calming scent that helps reduce stress and anxiety.",
                image: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?q=80&w=1000&auto=format&fit=crop",
            },
            {
                id: 5,
                name: "Jasmine",
                price: 35,
                description: "Sweet fragrance that fills your home with a natural perfume.",
                image: jasmineImg,
            },
            {
                id: 6,
                name: "Mint",
                price: 10,
                description: "Refreshing aroma that also serves as a great culinary addition.",
                image: mintImg,
            }
        ]
    },
    {
        category: "Decorative Indoor Plants",
        items: [
            {
                id: 7,
                name: "Monstera Deliciosa",
                price: 45,
                description: "Famous for its unique split leaves, a true statement piece.",
                image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop",
            },
            {
                id: 8,
                name: "Fiddle Leaf Fig",
                price: 55,
                description: "Large, architecturally striking leaves for any modern room.",
                image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop",
            },
            {
                id: 9,
                name: "Pothos",
                price: 18,
                description: "Easy to grow trailing plant that looks great on shelves.",
                image: pothosImg,
            }
        ]
    }
];


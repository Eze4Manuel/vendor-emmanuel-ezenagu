
const categories = [
    {
        id: 'rooms',
        name: "Rooms",
        sub_category: [
            {
                id: 'suite',
                name: "Suite",
                sub_category: [
                    {
                        id: 'single',
                        name: "Single",
                    },
                    {
                        id: 'double',
                        name: "Double",
                    },
                    {
                        id: 'triple',
                        name: "Triple",
                    },
                    {
                        id: 'quad',
                        name: "Quad",
                    },

                ]
            },
            {
                id: 'apartment',
                name: "Apartment",
                sub_category: [
                    {
                        id: 'queen',
                        name: "Queen",
                    },
                    {
                        id: 'king',
                        name: "King",
                    },
                    {
                        id: 'twin',
                        name: "Twin",
                    },
                    {
                        id: 'hollywood_twin_rooms',
                        name: "Hollywood Twin Room",
                    },

                ]
            },
            {
                id: 'executive',
                name: "Executive",
                sub_category: [
                    {
                        id: 'double-double',
                        name: "Double-double",
                    },
                    {
                        id: 'studio',
                        name: "Studio",
                    },
                    {
                        id: 'suite-executive',
                        name: "Suite/Executive suite",
                    },
                    {
                        id: 'president',
                        name: "President/President Executive",
                    },
                ]
            }
        ],
        deals: [
            {
                id: 'new_collections',
                name: "New Collections",
                gallery: ['https://setupmyhotel.com/images/Room-Type-serviced-apartment.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337']
            },
            {
                id: 'sale',
                name: "Sale",
                gallery: ['https://setupmyhotel.com/images/Room-Type-connecting-rooms.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337']
            }
        ]

    },
    {
        id: 'furniture',
        name: "Furniture",
        sub_category: [
            {
                id: 'living_room_furniture',
                name: "Living Room Furniture",
                sub_category: [
                    {
                        id: 'sofas_chair',
                        name: "Sofas",
                    },
                    {
                        id: 'sectionals',
                        name: "Sectionals",
                    },
                    {
                        id: 'sleeper_sofas',
                        name: "Sleeper Sofas",
                    },
                    {
                        id: 'loveseats',
                        name: "Loveseats",
                    },
                    {
                        id: 'accent_chairs',
                        name: "Accent Chairs",
                    },
                    {
                        id: 'chaises',
                        name: "Chaises",
                    },
                    {
                        id: 'chairs-and-a-half',
                        name: "Chairs-and-a-half",
                    },
                    {
                        id: 'recliners',
                        name: "Recliners",
                    },
                    {
                        id: 'swivels_&_gliders',
                        name: "Swivels & Gliders",
                    },

                ]
            },
            {
                id: 'dinning_room_and_furniture',
                name: "Dining Room Furniture",
                sub_category: [
                    {
                        id: 'queen',
                        name: "Dining tables",
                    },
                    {
                        id: 'king',
                        name: "Arm Chairs",
                    },
                    {
                        id: 'twin',
                        name: "Side Chairs",
                    },
                    {
                        id: 'hollywood_twin_rooms',
                        name: "Bar and counter stools",
                    },
                    {
                        id: 'sideboards',
                        name: "Sideboards",
                    },
                    {
                        id: 'console_tables',
                        name: "Console tables",
                    },

                ]
            },
            {
                id: 'bedroom_furniture',
                name: "Bedroom Furniture",
                sub_category: [
                    {
                        id: 'wood_and_upholstered',
                        name: "Beds: Wood and upholstered",
                    },
                    {
                        id: 'headboards',
                        name: "Headboards",
                    },
                    {
                        id: 'night-stands',
                        name: "Nightstands",
                    },
                    {
                        id: 'dressers',
                        name: "Dressers",
                    },
                    {
                        id: 'dressers',
                        name: "Mirrors",
                    },
                    {
                        id: 'dressers',
                        name: "Chests and armoires",
                    },
                    {
                        id: 'mattresses',
                        name: "Mattresses",
                    },
                    {
                        id: 'chests_and_armories',
                        name: "Chests and armoires",
                    },
                ]
            }
        ],
        deals: [
            {
                id: 'new_collections',
                name: "New Collections",
                gallery: ['https://www.bassettfurniture.com/blog/images/2511-K163A-Charlotte-SU20.jpg']
            },
            {
                id: 'sale',
                name: "Sale",
                gallery: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60']
            }
        ]

    },
    {
        id: 'ligthninig_and_decor',
        name: "Ligthning & Decor",
        sub_category: [
            {
                id: 'lightning',
                name: "Lightning",
                sub_category: [
                    {
                        id: 'table_lamps',
                        name: "Table lamps",
                    },
                    {
                        id: 'floor_lamps',
                        name: "Floor lamps",
                    },
                    {
                        id: 'ceiling_lights',
                        name: "Ceiling lights",
                    },
                    {
                        id: 'lampshades',
                        name: "Lampshades",
                    },
                    {
                        id: 'intelligent_lighning',
                        name: "Intelligent lightning",
                    },
                ]
            },
            {
                id: 'decor',
                name: "Decor",
                sub_category: [
                    {
                        id: 'art_and_figuratines',
                        name: "Art & Figuratines",
                    },
                    {
                        id: 'candles',
                        name: "Candles",
                    },
                    {
                        id: 'decorative_pillows',
                        name: "Decorative Pillows",
                    },
                    {
                        id: 'frames_and_pictures',
                        name: "Frames & Pictures",
                    },
                    {
                        id: 'mirrors',
                        name: "Mirrors",
                    },
                    {
                        id: 'rugs',
                        name: "Rugs",
                    },
                ]
            },
            {
                id: 'plants',
                name: "Plants",
                sub_category: [
                    {
                        id: 'table_lamps',
                        name: "Table lamps",
                    },
                    {
                        id: 'floor_lamps',
                        name: "Floor lamps",
                    },
                    {
                        id: 'ceiling_lights',
                        name: "Ceiling lights",
                    },
                    {
                        id: 'table_lamps',
                        name: "Table Lamps",
                    },
                    {
                        id: 'lampshades',
                        name: "Lampshades",
                    },
                    {
                        id: 'intelligent_lighning',
                        name: "Intelligent lightning",
                    },
                ]
            }
        ],
        deals: [
            {
                id: 'new_collections',
                name: "New Collections",
                gallery: ['https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80']
            },
            {
                id: 'sale',
                name: "Sale",
                gallery: ['https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80']
            }
        ]
    },
    {
        id: 'kitchen',
        name: "Kitchen",
        sub_category: [
            {
                id: 'kitchen',
                name: "Kitchen",
                sub_category: [
                    {
                        id: 'one_wall_kitchen',
                        name: "One Wall Kitchen",
                    },
                    {
                        id: 'galley_kitchen',
                        name: "Galley Kitchen",
                    },
                    {
                        id: 'l_shaped_kitchen',
                        name: "L-Shaped Kitchen",
                    },
                    {
                        id: 'u_shaped_kitchen',
                        name: "U-Shaped Kitchen",
                    },
                    {
                        id: 'island_kitchen',
                        name: "Island Kitchen",
                    },
                    {
                        id: 'peninsula_kitchen',
                        name: "Peninsula Kitchen",
                    }
                ]
            }
        ],
        deals: [
            {
                id: 'new_collections',
                name: "New Collections",
                gallery: ['https://www.grundig.com/ktchnmag/wp-content/uploads/2018/11/grundig_kitchen-layouts_6.jpg']
            },
            {
                id: 'sale',
                name: "Sale",
                gallery: ['https://www.grundig.com/ktchnmag/wp-content/uploads/2018/12/grundig_layout-kitchen_XX_2.jpg']
            }
        ]
    },
    {
        id: 'bath_and_body',
        name: "Bath & Body",
        sub_category: [            
            {
                id: 'fragrance',
                name: "Fragrance",
                sub_category: [
                    {
                        id: 'perfumes',
                        name: "Perfumes",
                    },
                    {
                        id: 'oils',
                        name: "Oils",
                    },
                    {
                        id: 'body_sprays',
                        name: "Body_Sprays",
                    }

                     
                ]
            },
            {
                id: 'bath_and_shower',
                name: "Bath & Shower",
                sub_category: [
                    {
                        id: 'bath_oils',
                        name: "Bath Oils",
                    },
                    {
                        id: 'soaps',
                        name: "Soaps",
                    },
                    {
                        id: 'liquid soaps',
                        name: "Liquid Soap",
                    },
                     
                ]
            },
            {
                id: 'moisturizers',
                name: "Moisturizers",
                sub_category: [
                    {
                        id: 'hair_conditioner',
                        name: "Hair Conditioner",
                    },
                    {
                        id: 'hair_oil',
                        name: "Hair Oils",
                    },
                    {
                        id: 'hair_relaxers',
                        name: "Hair Relaxers",
                    }                   
                ]
            }
        ],
        deals: [
            {
                id: 'new_collections',
                name: "New Collections",
                gallery: ['https://www.grundig.com/ktchnmag/wp-content/uploads/2018/11/grundig_kitchen-layouts_6.jpg']
            },
            {
                id: 'sale',
                name: "Sale",
                gallery: ['https://www.grundig.com/ktchnmag/wp-content/uploads/2018/12/grundig_layout-kitchen_XX_2.jpg']
            }
        ]
    },
    {
        id: 'garden',
        name: "Garden",
        sub_category: [
            {
                id: 'garden',
                name: "Garden",
                sub_category: [
                    {
                        id: 'butterfly_garden',
                        name: "Butterfly Garden",
                    },
                    {
                        id: 'container_gardening',
                        name: "Container Gardening",
                    },
                    {
                        id: 'demonstration_gardens',
                        name: "Demonstration Gardens",
                    },
                    {
                        id: 'fruits_vegetables_and_herbs',
                        name: "Fruits, Vegetables & Herbs",
                    },
                    {
                        id: 'organic_gardening',
                        name: "Organic Gardening",
                    },
                    {
                        id: 'water_garden',
                        name: "Water Gardens",
                    }
                ]
            }           
        ],
        deals: [
            {
                id: 'new_collections',
                name: "New Collections",
                gallery: ['https://sfyl.ifas.ufl.edu/media/sfylifasufledu/sfyl-assets/lawn-amp-garden/images/Hands-holding-tweezers-over-potted-plants.jpg']
            },
            {
                id: 'sale',
                name: "Sale",
                gallery: ['https://sfyl.ifas.ufl.edu/media/sfylifasufledu/sfyl-assets/lawn-amp-garden/images/Butterfly-sitting-on-flower-in-butterfly-garden.jpg']
            }
        ]
    }
]

export default categories;
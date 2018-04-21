import { Item } from '../Model/Item';
import { Category } from '../Model/Category';



export class ItemList {

    static LevelOneCategories: Array<Category> =
        [
            {
                categoryId: "aerobic",
                categoryName: "Aerobic"
            },
            {
                categoryId: "anaerobic",
                categoryName: "Anaerobic"
            },
            {
                categoryId: "freeStyle",
                categoryName: "Free Style"
            }
        ];



    static anaerobicCategody: Array<Item> =
        [
            {
                itemId: "leg",
                itemName: "Leg",
                subItems: [
                    {
                        subitemId: "Leg1",
                        subitemName: "Leg 1"
                    },
                    {
                        subitemId: "Leg2",
                        subitemName: "Leg 2"
                    },
                    {
                        subitemId: "Leg3",
                        subitemName: "Leg 3"
                    }]
            },
            {
                itemId: "back",
                itemName: "Back",
                subItems: [
                    {
                        subitemId: "Back1",
                        subitemName: "Back 1"
                    },
                    {
                        subitemId: "Back2",
                        subitemName: "Back 2"
                    },
                    {
                        subitemId: "Back3",
                        subitemName: "Back 3"
                    }]
            },
            {
                itemId: "chest",
                itemName: "Chest",
                subItems: [
                    {
                        subitemId: "Chest1",
                        subitemName: "Chest 1"
                    },
                    {
                        subitemId: "Chest2",
                        subitemName: "Chest 2"
                    },
                    {
                        subitemId: "Chest3",
                        subitemName: "Chest 3"
                    }]
            },

            {
                itemId: "shoulder",
                itemName: "Shoulder",
                subItems: [
                    {
                        subitemId: "Shoulder1",
                        subitemName: "Shoulder 1"
                    },
                    {
                        subitemId: "Shoulder2",
                        subitemName: "Shoulder 2"
                    },
                    {
                        subitemId: "Shoulder3",
                        subitemName: "Shoulder 3"
                    }]
            },

            {
                itemId: "biceps",
                itemName: "Biceps",
                subItems: [
                    {
                        subitemId: "Biceps1",
                        subitemName: "Biceps 1"
                    },
                    {
                        subitemId: "Biceps2",
                        subitemName: "Biceps 2"
                    },
                    {
                        subitemId: "Biceps3",
                        subitemName: "Biceps 3"
                    }]
            },

            {
                itemId: "triceps",
                itemName: "Triceps",
                subItems: [
                    {
                        subitemId: "Triceps1",
                        subitemName: "Triceps 1"
                    },
                    {
                        subitemId: "Triceps2",
                        subitemName: "Triceps 2"
                    },
                    {
                        subitemId: "Triceps3",
                        subitemName: "Triceps 3"
                    }]
            },

        ];



    static aerobicCategody: Array<Item> =
        [
            {
                itemId: "treadmill",
                itemName: "Treadmill",
                subItems: [
                    {
                        subitemId: "Treadmill1",
                        subitemName: "Treadmill 1"
                    },
                    {
                        subitemId: "Treadmill2",
                        subitemName: "Treadmill 2"
                    },
                    {
                        subitemId: "Treadmill3",
                        subitemName: "Treadmill 3"
                    }]
            },
            {
                itemId: "elliptical",
                itemName: "Elliptical",
                subItems: [
                    {
                        subitemId: "Elliptical1",
                        subitemName: "Elliptical 1"
                    },
                    {
                        subitemId: "Elliptical2",
                        subitemName: "Elliptical 2"
                    },
                    {
                        subitemId: "Elliptical3",
                        subitemName: "Elliptical 3"
                    }]
            },
            {
                itemId: "stairs",
                itemName: "Stairs",
                subItems: [
                    {
                        subitemId: "Stairs1",
                        subitemName: "Stairs 1"
                    },
                    {
                        subitemId: "Stairs2",
                        subitemName: "Stairs 2"
                    },
                    {
                        subitemId: "Stairs3",
                        subitemName: "Stairs 3"
                    }]
            },

            {
                itemId: "swimming",
                itemName: "Swimming",
                subItems: [
                    {
                        subitemId: "Swimming1",
                        subitemName: "Swimming 1"
                    },
                    {
                        subitemId: "Swimming2",
                        subitemName: "Swimming 2"
                    },
                    {
                        subitemId: "Swimming3",
                        subitemName: "Swimming 3"
                    }]
            },

            {
                itemId: "bike",
                itemName: "Bike",
                subItems: [
                    {
                        subitemId: "Bike1",
                        subitemName: "Bike 1"
                    },
                    {
                        subitemId: "Bike2",
                        subitemName: "Bike 2"
                    },
                    {
                        subitemId: "Bike3",
                        subitemName: "Bike 3"
                    }]
            }

        ];


    static freeStyleCategody: Array<Item> =
        [
            {
                itemId: "backExtensions",
                itemName: "Back Extensions",
                subItems: [
                    {
                        subitemId: "backExtensions1",
                        subitemName: "Back Extensions 1"
                    },
                    {
                        subitemId: "backExtensions2",
                        subitemName: "Back Extensions 2"
                    },
                    {
                        subitemId: "backExtensions3",
                        subitemName: "Back Extensions 3"
                    }]
            },
            {
                itemId: "underhandPullups",
                itemName: "Underhand Pullups",
                subItems: [
                    {
                        subitemId: "underhandPullups1",
                        subitemName: "Underhand Pullups 1"
                    },
                    {
                        subitemId: "underhandPullups2",
                        subitemName: "Underhand Pullups 2"
                    },
                    {
                        subitemId: "underhandPullups3",
                        subitemName: "Underhand Pullups 3"
                    }]
            },
            {
                itemId: "ropePulls",
                itemName: "Rope Pulls",
                subItems: [
                    {
                        subitemId: "ropePulls1",
                        subitemName: "Rope Pulls 1"
                    },
                    {
                        subitemId: "ropePulls2",
                        subitemName: "Rope Pulls 2"
                    },
                    {
                        subitemId: "ropePulls3",
                        subitemName: "Rope Pulls 3"
                    }]
            },

            {
                itemId: "rearPulldows",
                itemName: "Rear Pulldows",
                subItems: [
                    {
                        subitemId: "rearPulldows 1",
                        subitemName: "Rear Pulldows 1"
                    },
                    {
                        subitemId: "rearPulldows 2",
                        subitemName: "Rear Pulldows 2"
                    },
                    {
                        subitemId: "rearPulldows 3",
                        subitemName: "Rear Pulldows 3"
                    }]
            },

            {
                itemId: "deadlifts",
                itemName: "Deadlifts",
                subItems: [
                    {
                        subitemId: "deadlifts1",
                        subitemName: "Deadlifts 1"
                    },
                    {
                        subitemId: "deadlifts2",
                        subitemName: "Deadlifts 2"
                    },
                    {
                        subitemId: "deadlifts3",
                        subitemName: "Deadlifts 3"
                    }]
            },

            {
                itemId: "barRows",
                itemName: "Bar Rows",
                subItems: [
                    {
                        subitemId: "barRows 1",
                        subitemName: "Bar Rows 1"
                    },
                    {
                        subitemId: "barRows 2",
                        subitemName: "Bar Rows 2"
                    },
                    {
                        subitemId: "barRows 3",
                        subitemName: "Bar Rows 3"
                    }]
            }

        ];


    public static getWorkoutItemsPerCategory(categoryRequest: string): Array<Item> {
        switch (categoryRequest) {
            case "aerobic": {
                return this.aerobicCategody;
            }
            case "anaerobic": {
                return this.anaerobicCategody;
            }
            case "freeStyle": {
                return this.freeStyleCategody;
            }
        }
    }






    public static getAllCombimedItemsData() {

        let aerobic = this.getWorkoutItemsPerCategory(this.LevelOneCategories[0].categoryId);
        let anaerobic = this.getWorkoutItemsPerCategory(this.LevelOneCategories[1].categoryId);
        let freeStyle = this.getWorkoutItemsPerCategory(this.LevelOneCategories[2].categoryId);

        let result = [
            {
                categoryId: this.LevelOneCategories[0].categoryId,
                categoryName: this.LevelOneCategories[0].categoryName,
                items: this.getWorkoutItemsPerCategory(this.LevelOneCategories[0].categoryId)
            },
            {
                categoryId: this.LevelOneCategories[0].categoryId,
                categoryName: this.LevelOneCategories[0].categoryName,
                items: this.getWorkoutItemsPerCategory(this.LevelOneCategories[0].categoryId)
            },
            {
                categoryId: this.LevelOneCategories[0].categoryId,
                categoryName: this.LevelOneCategories[0].categoryName,
                items: this.getWorkoutItemsPerCategory(this.LevelOneCategories[0].categoryId)
            }
        ];

        return result;
    }
}

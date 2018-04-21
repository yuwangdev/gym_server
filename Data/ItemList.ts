import { Item } from '../Model/Item';

type Category = {
    categoryId: string,
    categoryName: string,
    items: Array<Item>,
}

export class ItemList {

    static LevelOneCategody: Array<Item> =
        [
            {
                itemId: "aerobic",
                itemName: "Aerobic"
            },
            {
                itemId: "anaerobic",
                itemName: "Anaerobic"
            },
            {
                itemId: "freeStyle",
                itemName: "Free Style"
            }
        ];



    static anaerobicCategody: Array<Item> =
        [
            {
                itemId: "Leg",
                itemName: "Leg"
            },
            {
                itemId: "back",
                itemName: "Back"
            },
            {
                itemId: "chest",
                itemName: "Chest"
            },

            {
                itemId: "shoulder",
                itemName: "Shoulder"
            },

            {
                itemId: "biceps",
                itemName: "Biceps"
            },

            {
                itemId: "triceps",
                itemName: "Triceps"
            },

        ];



    static aerobicCategody: Array<Item> =
        [
            {
                itemId: "treadmill",
                itemName: "Treadmill"
            },
            {
                itemId: "elliptical",
                itemName: "Elliptical"
            },
            {
                itemId: "stairs",
                itemName: "Stairs"
            },

            {
                itemId: "swimming",
                itemName: "Swimming"
            },

            {
                itemId: "bike",
                itemName: "Bike"
            }

        ];


    static freeStyleCategody: Array<Item> =
        [
            {
                itemId: "backExtensions",
                itemName: "Back Extensions"
            },
            {
                itemId: "underhandPullups",
                itemName: "Underhand Pullups"
            },
            {
                itemId: "ropePulls",
                itemName: "Rope Pulls"
            },

            {
                itemId: "rearPulldows",
                itemName: "Rear Pulldows"
            },

            {
                itemId: "deadlifts",
                itemName: "Deadlifts"
            },

            {
                itemId: "barRows ",
                itemName: "Bar Rows "
            }

        ];


    public static getWorkoutItemsPerCategory(categoryRequest: string) {
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

        let aerobic = this.getWorkoutItemsPerCategory(this.LevelOneCategody[0].itemId);
        let anaerobic = this.getWorkoutItemsPerCategory(this.LevelOneCategody[1].itemId);
        let freeStyle = this.getWorkoutItemsPerCategory(this.LevelOneCategody[2].itemId);

        let result = [
            {
                categoryId: this.LevelOneCategody[0].itemId,
                categoryName: this.LevelOneCategody[0].itemId,
                items: this.getWorkoutItemsPerCategory(this.LevelOneCategody[0].itemId)
            },
            {
                categoryId: this.LevelOneCategody[0].itemId,
                categoryName: this.LevelOneCategody[0].itemId,
                items: this.getWorkoutItemsPerCategory(this.LevelOneCategody[0].itemId)
            },
            {
                categoryId: this.LevelOneCategody[0].itemId,
                categoryName: this.LevelOneCategody[0].itemId,
                items: this.getWorkoutItemsPerCategory(this.LevelOneCategody[0].itemId)
            }


        ];

        return result;
    }
}

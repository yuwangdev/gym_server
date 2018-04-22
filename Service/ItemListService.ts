import { Item } from '../Model/Item';
import { Category } from '../Model/Category';
import * as Collections from 'typescript-collections';


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
                        subitemName: "Leg 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Leg2",
                        subitemName: "Leg 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Leg3",
                        subitemName: "Leg 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },
            {
                itemId: "back",
                itemName: "Back",
                subItems: [
                    {
                        subitemId: "Back1",
                        subitemName: "Back 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Back2",
                        subitemName: "Back 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Back3",
                        subitemName: "Back 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },
            {
                itemId: "chest",
                itemName: "Chest",
                subItems: [
                    {
                        subitemId: "Chest1",
                        subitemName: "Chest 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Chest2",
                        subitemName: "Chest 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Chest3",
                        subitemName: "Chest 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },

            {
                itemId: "shoulder",
                itemName: "Shoulder",
                subItems: [
                    {
                        subitemId: "Shoulder1",
                        subitemName: "Shoulder 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Shoulder2",
                        subitemName: "Shoulder 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Shoulder3",
                        subitemName: "Shoulder 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },

            {
                itemId: "biceps",
                itemName: "Biceps",
                subItems: [
                    {
                        subitemId: "Biceps1",
                        subitemName: "Biceps 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Biceps2",
                        subitemName: "Biceps 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Biceps3",
                        subitemName: "Biceps 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },

            {
                itemId: "triceps",
                itemName: "Triceps",
                subItems: [
                    {
                        subitemId: "Triceps1",
                        subitemName: "Triceps 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Triceps2",
                        subitemName: "Triceps 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Triceps3",
                        subitemName: "Triceps 3",
                        unit: "lb",
                        calorie: 400
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
                        subitemName: "Treadmill 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Treadmill2",
                        subitemName: "Treadmill 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Treadmill3",
                        subitemName: "Treadmill 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },
            {
                itemId: "elliptical",
                itemName: "Elliptical",
                subItems: [
                    {
                        subitemId: "Elliptical1",
                        subitemName: "Elliptical 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Elliptical2",
                        subitemName: "Elliptical 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Elliptical3",
                        subitemName: "Elliptical 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },
            {
                itemId: "stairs",
                itemName: "Stairs",
                subItems: [
                    {
                        subitemId: "Stairs1",
                        subitemName: "Stairs 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Stairs2",
                        subitemName: "Stairs 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Stairs3",
                        subitemName: "Stairs 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },

            {
                itemId: "swimming",
                itemName: "Swimming",
                subItems: [
                    {
                        subitemId: "Swimming1",
                        subitemName: "Swimming 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Swimming2",
                        subitemName: "Swimming 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Swimming3",
                        subitemName: "Swimming 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },

            {
                itemId: "bike",
                itemName: "Bike",
                subItems: [
                    {
                        subitemId: "Bike1",
                        subitemName: "Bike 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Bike2",
                        subitemName: "Bike 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "Bike3",
                        subitemName: "Bike 3",
                        unit: "lb",
                        calorie: 400
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
                        subitemName: "Back Extensions 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "backExtensions2",
                        subitemName: "Back Extensions 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "backExtensions3",
                        subitemName: "Back Extensions 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },
            {
                itemId: "underhandPullups",
                itemName: "Underhand Pullups",
                subItems: [
                    {
                        subitemId: "underhandPullups1",
                        subitemName: "Underhand Pullups 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "underhandPullups2",
                        subitemName: "Underhand Pullups 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "underhandPullups3",
                        subitemName: "Underhand Pullups 3",
                    }]
            },
            {
                itemId: "ropePulls",
                itemName: "Rope Pulls",
                subItems: [
                    {
                        subitemId: "ropePulls1",
                        subitemName: "Rope Pulls 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "ropePulls2",
                        subitemName: "Rope Pulls 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "ropePulls3",
                        subitemName: "Rope Pulls 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },

            {
                itemId: "rearPulldows",
                itemName: "Rear Pulldows",
                subItems: [
                    {
                        subitemId: "rearPulldows 1",
                        subitemName: "Rear Pulldows 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "rearPulldows 2",
                        subitemName: "Rear Pulldows 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "rearPulldows 3",
                        subitemName: "Rear Pulldows 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },

            {
                itemId: "deadlifts",
                itemName: "Deadlifts",
                subItems: [
                    {
                        subitemId: "deadlifts1",
                        subitemName: "Deadlifts 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "deadlifts2",
                        subitemName: "Deadlifts 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "deadlifts3",
                        subitemName: "Deadlifts 3",
                        unit: "lb",
                        calorie: 400
                    }]
            },

            {
                itemId: "barRows",
                itemName: "Bar Rows",
                subItems: [
                    {
                        subitemId: "barRows1",
                        subitemName: "Bar Rows 1",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "barRows2",
                        subitemName: "Bar Rows 2",
                        unit: "lb",
                        calorie: 400
                    },
                    {
                        subitemId: "barRows3",
                        subitemName: "Bar Rows 3",
                        unit: "lb",
                        calorie: 400
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

        let result = new Array();
        for (let cat of this.LevelOneCategories) {
            result.push(

                {
                    categoryId: cat.categoryId,
                    categoryName: cat.categoryName,
                    items: JSON.stringify(this.getWorkoutItemsPerCategory(cat.categoryId))
                }
            );

        }


        return result;
    }

    public static getAllIndexedItemsList() {
        let result = new Array();
        for (let cat of this.LevelOneCategories) {
            for (let item of this.getWorkoutItemsPerCategory(cat.categoryId)) {
                for (let subItem of item.subItems) {
                    result.push(
                        {
                            recordItemId: cat.categoryId + "." + item.itemId + "." + subItem.subitemId,
                            unit: subItem.unit,
                            calorie: subItem.calorie,
                            recordItemName: subItem.subitemName

                        }

                    );

                }

            }
        }
        return result;
    }


    public static getAllIndexedItemsMap(): Collections.Dictionary<string, object> {
        let dict = new Collections.Dictionary<string, object>();
        for (let cat of this.LevelOneCategories) {
            for (let item of this.getWorkoutItemsPerCategory(cat.categoryId)) {
                for (let subItem of item.subItems) {
                    dict.setValue(cat.categoryId + "." + item.itemId + "." + subItem.subitemId,
                        {
                            recordItemId: cat.categoryId + "." + item.itemId + "." + subItem.subitemId,
                            unit: subItem.unit,
                            calorie: subItem.calorie,
                            recordItemName: subItem.subitemName

                        }

                    );

                }

            }
        }
        return dict;
    }





    public static getItemPerId(recordId: string): string {
        return JSON.stringify(this.getAllIndexedItemsMap().getValue(recordId));

    }




}

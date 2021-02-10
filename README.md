# node-fs-example

## An example problem to learn file operations using fs module of node.

## Problem Statement

You have been given 3 files containing food data. The first line of each file is the type of data, and the remaining are the records. Perform the following operations on the data:

1. Read any file and display the output as an object with file name as key and the contents as array of objects i.e. 

    ```
    {
        vegetables: [
            {
                name: carrot,
                colours: orange
            },
            {
                name: beans,
                colours: green
            },
            ...
        ]
    }
    ```
    The function should now accept an optional parameter which allows you to filter records based on property

    ```
    eg:- Get all vegetables that are green

    {
        vegetables: [
            {
                name: beans,
                colours: green
            },
            ...
        ]
    }
    ```
    Bonus for handling error scenarios

2. Add the following items to `beverages.txt`:

        tea,hot
        hot chocolate,hot
        coffee,cold

    Use the same function to append the following in given files:

        fruits.txt:
            strawberry
            peach
        vegetables.txt:
            pumpkin

    **Function should return the final content of file in the format shown in 1.**

3. Remove the vegetables from `vegetables.txt` which are "green" (entire record)
    - Use the same function to remove beverages that are "cold"
    - Function should return the final content of file in the format shown in 1.


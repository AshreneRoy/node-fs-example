# node-fs-example

## An example problem to learn file operations using fs module of node

## Problem Statement

You have been given 3 files containing some data in `./seed`. Perform the following operations on the data:

1. Read all files and display the output as an object with file name as key and the contents as array of strings i.e.

    ```
    {
        vegetables: ["carrot", "beans"...],
        fruits: ["mango"...]
    }
    ```

    Your code should now accept an optional parameter which allows you to filter records based on first character of the record

    ```
    eg:- Get all vegetables/fruits/beverages that start with letter `c`
    Output -
    {
        vegetables: ["carrot"],
        fruits: []
    }
    ```

    Bonus for handling error scenarios

2. Add the following items to `beverages.txt` using node:

        tea
        hot chocolate
        coffee

    Use the same function to append the following in given files:

        fruits.txt:
            strawberry
            peach
        vegetables.txt:
            pumpkin

    **Function should return the final content of file in the format shown in 1.**

3. Remove the vegetables from `vegetables.txt` which start with letter `c`
    - Function should return the final content of file in the format shown in 1.

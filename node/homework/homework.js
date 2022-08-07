/**
 * Create a simple server able to receive http requests that should store resources in a file saved of disk.
 * The objects are required to have a parameter named id.
 * The server should have the following functionalities:
 * 		A path able to write an object to a file.
 * 		A path able to update an object from a file.
 * 		A path to fetch an object from a file based on its id.
 * 		A path to delete an object from a file based on its id.
 * The objects can be anything, users, books.
 */
const express = require("express");
const app = express();
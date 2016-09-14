const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/allInOrderDb');

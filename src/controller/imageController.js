import express from 'express'
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;  //import these values from .env files

export const getAllImage = async (req, res) => {
  const { category } = req.params;
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}`);
    res.status(201).json({ message: 'Successfully fetched your Image Category', success: true, data: response.data.hits });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server Error', success: false });
  }
}
export const searchImage = async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${q}`)
    res.json(response.data.hits);
  }
  catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server Error', success: false });
  }
}

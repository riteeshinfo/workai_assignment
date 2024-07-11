// src/services/apiService.js
import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://any-api.com/clever_com/clever_com/docs/API_Description',
});

export const fetchReferrals = async () => {
  const response = await apiService.get('/referrals');
  return response.data;
};

export const fetchServices = async () => {
  const response = await apiService.get('/services');
  return response.data;
};

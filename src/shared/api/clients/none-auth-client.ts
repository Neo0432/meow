import axios from 'axios';
import {config} from '@shared/api/config';

export const noneAuthClient = axios.create({
  baseURL: config.API_URL,
  headers: {'Content-Type': 'application/json'},
});

import { API_URL } from '@/config/api.config'
import axios from 'axios'
import { getContentType } from './api.helpers'

const instance = axios.create({
    baseURL: API_URL,
    headers: getContentType()
})
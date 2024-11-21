import { axiosInstance } from '../../configs/services/http/index'
import { LocationTypes } from './types'

export const fetchListLocation = async (): Promise<LocationTypes[]> => {
  try {
    const response = await axiosInstance.get<LocationTypes[]>(`/location`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch list location:', error)
    throw error
  }
}

export const getLocationById = async ({ id }: { id: string }): Promise<LocationTypes> => {
  try {
    const response = await axiosInstance.get<LocationTypes>(`/location/${id}`)
    return response.data
  } catch (error) {
    console.error('Failed to get location:', error)
    throw error
  }
}

export const createLocation = async (body: LocationTypes): Promise<LocationTypes> => {
  try {
    const response = await axiosInstance.post<LocationTypes>(`/location`, body)
    return response.data
  } catch (error) {
    console.error('Failed to create location:', error)
    throw error
  }
}

export const updateLocation = async (body: LocationTypes, id: string): Promise<LocationTypes> => {
  try {
    const response = await axiosInstance.put<LocationTypes>(`/location/${id}`, body)
    return response.data
  } catch (error) {
    console.error('Failed to update location:', error)
    throw error
  }
}

export const deleteLocation = async (body: LocationTypes): Promise<LocationTypes> => {
  const { location_id } = body
  try {
    const response = await axiosInstance.delete<LocationTypes>(`/location/${location_id}`, {})
    return response.data
  } catch (error) {
    console.error('Failed to delete location:', error)
    throw error
  }
}

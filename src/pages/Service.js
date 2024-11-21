import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/logic';

class Service {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        console.error('API request error:', error);
        throw error;
      }
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API response error:', error);
        throw error;
      }
    );
  }

  requestCare(caregiverRequest){
    return this.api.post(API_BASE_URL + '/requestCare', caregiverRequest)
  }

  addMeal(formData){
    return this.api.post(API_BASE_URL + '/registerMeal',formData)
  }
  
  viewMeals() {
    return this.api.get(API_BASE_URL + '/retrieveMealToMember');
  }

  viewMealsAdmin() {
    return this.api.get(API_BASE_URL + '/retrieveMealToAdmin');
  }

  approveMeals(id){
    return this.api.post(API_BASE_URL + `/approveMeal/${id}`)
  }

  rejectMeals(id){
    return this.api.post(API_BASE_URL + `/rejectMeal/${id}`)
  }

  retrieveUsers(){
    return this.api.get(API_BASE_URL + '/pending-registrations')
  }
  
  approveUsers(id){
    return this.api.post(API_BASE_URL + `/approve-registration/${id}`)
  }

  rejectUsers(id){
    return this.api.post(API_BASE_URL + `/reject-registration/${id}`)
  }

  retrieveTakenReq(){
    return this.api.get(API_BASE_URL + '/retrieveTakenRequestToCargiver')
  }

  retrievePendingReq(){
    return this.api.get(API_BASE_URL + '/retrievePendingCareRequestToCaregivers')
  }

  takeCareRequest(request_id){
    return this.api.post(API_BASE_URL + `/takeCaregiverRequest/${request_id}`)
  }

  finishCareRequest(request_id){
    return this.api.post(API_BASE_URL + `/finishedCaregiverService/${request_id}`)
  }

  retrieveSpecificOrder(){
    return this.api.get(API_BASE_URL + '/deliveringorder')
  }

  retrieveOrders(){
    return this.api.get(API_BASE_URL + '/retriveOrderToVolunteers')
  }

  takeOrder(orderId){
    return this.api.post(API_BASE_URL + `/takeOrder/${orderId}`)
  }

  finishOrder(orderId){
    return this.api.post(API_BASE_URL + `/deliveryFinished/${orderId}`)
  }

  viewAdminProfile(){
    return this.api.get(API_BASE_URL + '/adminDashboard')
  }
  viewVolunteerProfile(){
    return this.api.get(API_BASE_URL + '/volunteerDashboard')
  }viewPartnerProfile(){
    return this.api.get(API_BASE_URL + '/partnerDashboard')
  }viewMemberProfile(){
    return this.api.get(API_BASE_URL + '/memberDashboard')
  }
}

export default new Service();

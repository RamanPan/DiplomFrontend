import {tok} from "../pages/SingInSide";

export const API_LOGIN = 'http://localhost:8081/api/v1/login';
export const API_REGISTER = 'http://localhost:8081/api/v1/register';
export const API_LOGOUT = 'http://localhost:8081/api/v1/logout';
export const API_CREATE_TEST = 'http://localhost:8081/api/tests/create';
export const API_ACTUAL_USER = 'http://localhost:8081/api/users/actUser';
export const API_CREATE_QUESTION = 'http://localhost:8081/api/questions/create';
export const API_CREATE_ANSWER = 'http://localhost:8081/api/answers/create';
export const API_DELETE_ANSWER = 'http://localhost:8081/api/answers/delete';
export const API_UPLOAD_TEST_PICTURE = 'http://localhost:8081/api/tests/upload';
export const API_UPLOAD_USER_PICTURE = 'http://localhost:8081/api/users/upload';
export const API_UPLOAD_QUESTION_PICTURE = 'http://localhost:8081/api/questions/upload';
export const API_UPLOAD_RESULT_PICTURE = 'http://localhost:8081/api/results/upload';
export const API_SET_USER_PICTURE = 'http://localhost:8081/api/users/setPicture';
export const API_SET_USER_LOGIN = 'http://localhost:8081/api/users/setLogin';
export const API_SET_USER_EMAIL = 'http://localhost:8081/api/users/setEmail';
export const API_SET_USER_FULLNAME = 'http://localhost:8081/api/users/setFullname';
export const API_SET_USER_PASSWORD = 'http://localhost:8081/api/users/setPassword';

export const roles = ['Студент', 'Преподаватель'];
export const pages = ['Каталог', 'Конструктор', 'Топ'];
export const settings = ['Личный кабинет','Выход'];
export const types = ['Стохастический','Детерминированный','Динамический'];
export const questionTypes = ['Закрытый','Открытый','Несколько вариантов'];
export const questionDifficulties = ['Легкая','Средняя','Сложная'];
export const questionCategories = ['Политическая','Культурная','Экономическая'];


export const NAME_MIN_LENGTH = 4;
export const NAME_MAX_LENGTH = 40;

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 15;

export const EMAIL_MAX_LENGTH = 40;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;
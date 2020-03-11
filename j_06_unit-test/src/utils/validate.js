
const MOBILE_PATTERN = /^\d{10}$/;
const EMAIL_PATTERN = /^([A-Za-z0-9_\-\.+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


/**
 * 是否為有效的 email 格式
 * @param {string} email
 * @return {boolean}
 */
export const isEmail = (email:string):boolean => (!email ? false : EMAIL_PATTERN.test(email));
/**
 * 是否為有效的手機/電話號碼
 * @param {string} mobileNumber
 * @return {boolean}
 */
export const isMobileNumber = (mobileNumber:string):boolean => (!mobileNumber ? false : MOBILE_PATTERN.test(mobileNumber.toString()));

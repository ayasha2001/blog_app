"use client"

declare const window: any;

const useDevice = () => {
  let deviceObj: any = {
    isMobile: false,
    isIpadOrTablet: false,
    isDesktop: false,
  };

  if (typeof window === 'undefined') return {
    ...deviceObj,
    isDesktop : true
  }
  
  const { userAgent } = window.navigator;

  if (/iPad|tablet/i.test(userAgent)) {
    deviceObj.isIpadOrTablet = true;
  } else if (
    /Mobile|iOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  ) {
    deviceObj.isMobile = true;
  } else {
    deviceObj.isDesktop = true;
  }
  // else if (/Android|tablet/i.test(userAgent)) {
  // }
  return deviceObj;
};

export default useDevice;

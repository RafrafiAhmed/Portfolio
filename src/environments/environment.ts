import { SnotifyPosition } from 'ng-snotify';



export const environment = {
  production: false,
  
  baseUrl : `https://portfolio-ahmed-rafrafi.herokuapp.com/`,

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },
};


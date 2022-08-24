import axios from 'axios';

const request = axios.create({
  baseURL: process.env.OCR_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Change request data/error here
request.interceptors.request.use(
  async (config) => {
    config.headers = {
      ...config.headers,
    };
    config.auth = {
      username: process.env.OCR_API_KEY,
      password: process.env.OCR_API_SECRET,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface OCRParams {
  format_type: 'url' | 'base64' | 'file';
  get_thumb: boolean;
}

export class OCRService {
  http = request;

  private formatBase64(image: string) {
    return image.replace(/^data:image\/\w+;base64,/, '');
  }


  async ekyc(image: string) {
    // console.log('OCRService.ekyc', image);
    const params: OCRParams = {
      format_type: 'base64',
      get_thumb: false,
    };
    try {
      const { data } = await this.http.post(
        'ekyc/card',
        {
          img: this.formatBase64(image),
        },
        {
          params,
        }
      );
      return data;
    } catch (error) {
      console.log('OCRService.ekyc', error);
      return error;
    }
  }

  async vehicleDocument(image: string) {}

  // Đăng ký xe
  async vehicleRegistrations(image: string) {
    // console.log('OCRService.ekyc', image);
    const params: OCRParams = {
      format_type: 'base64',
      get_thumb: false,
    };
    try {
      const { data } = await this.http.post(
        'ocr/vehicle_registration',
        {
          img: this.formatBase64(image),
        },
        {
          params,
        }
      );
      return data;
    } catch (error) {
      console.log('OCRService.vehicleRegistrations', error);
      return error;
    }
  }

  // Đăng kiểm xe
  async vehicleInspection(image: string) {
    // console.log('OCRService.ekyc', image);
    const params: OCRParams = {
      format_type: 'base64',
      get_thumb: false,
    };
    try {
      const { data } = await this.http.post(
        'ocr/vehicle_inspection',
        {
          img: image,
        },
        {
          params,
        }
      );
      return data;
    } catch (error) {
      console.log('OCRService.vehicleInspection', error);
      return error;
    }
  }

  // Giấy khai sinh
  async birthCertificate(image: string) {
    // console.log('OCRService.ekyc', image);
    const params: OCRParams = {
      format_type: 'base64',
      get_thumb: false,
    };
    try {
      const { data } = await this.http.post(
        'ocr/birth_certificate',
        {
          img: image,
        },
        {
          params,
        }
      );
      return data;
    } catch (error) {
      console.log('OCRService.birthCertificate', error);
      return error;
    }
  }

  // Biển số xe
  async vehiclePlate(image: string) {
    // console.log('OCRService.ekyc', image);
    const params: OCRParams = {
      format_type: 'base64',
      get_thumb: false,
    };
    try {
      const { data } = await this.http.post(
        'ocr/vehicle_plate',
        {
          img: image,
        },
        {
          params,
        }
      );
      return data;
    } catch (error) {
      console.log('OCRService.vehicle_plate', error);
      return error;
    }
  }
}

export default new OCRService();

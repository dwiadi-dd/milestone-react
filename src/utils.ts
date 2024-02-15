import { FormikProps } from "formik";
import { TFunction } from "i18next";

export const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export interface WishItemType {
  id: number;
  name: string;
  url: string;
  price: number;
}

export interface StepListType {
  id: number;
  title: string;
  alt: string;
  desc: string;
}

export interface DigiWishDataType {
  userList: RegsiterDataType[];
}

export interface StepListTypeObject {
  stepList: StepListType[];
}

export interface RegsiterDataType {
  fullname: string | null;
  email: string | null;
  dob: string | null;
  address: string | null;
  zipcode: string | null;
  city: string | null;
  province: string;
  username: string | null;
  password: string | null;
  wishlist: WishItemType[];
}
export interface UserDataType {
  fullname: string;
  email: string;
  dob: string;
  address: string;
  zipcode: string;
  city: string;
  province: string;
  username: string;
  password: string;
  wishlist: WishItemType[];
}
export const rupiah = (balance: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "idr",
  }).format(balance);
};

export interface RegsiterDataContextType {
  fullname: string;
  email: string;
  dob: string;
  address: string;
  zipcode: string;
  city: string;
  province: string;
  username: string;
  password: string;
  wishlist: WishItemType[];
}

export interface FormikDataInterface {
  fullname: string;
  email: string;
  dob: string;
  address: string;
  zipcode: string;
  city: string;
  province: string;
  username: string;
  password: string;
  confirmPassword: string;
  wishlist: WishItemType[];
}

export interface RegsiterDataTypeObject {
  registerData: RegsiterDataContextType;
}

export interface FormStepProps {
  formik: FormikProps<{
    fullname: string;
    email: string;
    dob: string;
    address: string;
    zipcode: string;
    city: string;
    province: string;
    username: string;
    password: string;
    confirmPassword: string;
    wishlist: never[];
  }>;
  t: TFunction;
}

interface City {
  kota: string;
}

interface CityList {
  [region: string]: City[];
}

export const stepList = [
  {
    id: 1,
    title: "personal information",
    alt: "please provide your personal information",
    desc: "please provide your personal information",
  },
  {
    id: 2,
    title: "address information",
    alt: "please provide current address",
    desc: "please provide your personal information",
  },
  {
    id: 3,
    title: "account information",
    alt: "setup your username and password",
    desc: "please provide your personal information",
  },
];

export const ListOfProvinsi = [
  { provinsi: "Banten", value: "banten" },
  { provinsi: "DKI Jakarta", value: "dki" },
  { provinsi: "Jawa Barat", value: "jabar" },
  { provinsi: "Jawa Tengah", value: "jateng" },
  { provinsi: "Daerah Istimewa Yogyakarta", value: "yogya" },
  { provinsi: "Jawa Timur", value: "jatim" },
];

export const ListOfCity: CityList = {
  jatim: [
    { kota: "Bangkalan" },
    { kota: "Banyuwangi" },
    { kota: "Blitar" },
    { kota: "Bojonegoro" },
    { kota: "Bondowoso" },
    { kota: "Gresik" },
    { kota: "Jember" },
    { kota: "Jombang" },
    { kota: "Kediri" },
    { kota: "Lamongan" },
    { kota: "Lumajang" },
    { kota: "Madiun" },
    { kota: "Magetan" },
    { kota: "Malang" },
    { kota: "Mojokerto" },
    { kota: "Nganjuk" },
    { kota: "Ngawi" },
    { kota: "Pacitan" },
    { kota: "Pamekasan" },
    { kota: "Pasuruan" },
    { kota: "Ponorogo" },
    { kota: "Probolinggo" },
    { kota: "Sampang" },
    { kota: "Sidoarjo" },
    { kota: "Situbondo" },
    { kota: "Sumenep" },
    { kota: "Trenggalek" },
    { kota: "Tuban" },
    { kota: "Tulungagung" },
    { kota: "Kota Batu" },
    { kota: "Kota Blitar" },
    { kota: "Kota Kediri" },
    { kota: "Kota Madiun" },
    { kota: "Kota Malang" },
    { kota: "Kota Mojokerto" },
    { kota: "Kota Pasuruan" },
    { kota: "Kota Probolinggo" },
    { kota: "Kota Surabaya" },
  ],
  jabar: [
    { kota: "Kabupaten Bandung" },
    { kota: "Kabupaten Bandung Barat" },
    { kota: "Kabupaten Bekasi" },
    { kota: "Kabupaten Bogor" },
    { kota: "Kabupaten Ciamis" },
    { kota: "Kabupaten Cianjur" },
    { kota: "Kabupaten Cirebon" },
    { kota: "Kabupaten Garut" },
    { kota: "Kabupaten Indramayu" },
    { kota: "Kabupaten Karawang" },
    { kota: "Kabupaten Kuningan" },
    { kota: "Kabupaten Majalengka" },
    { kota: "Kabupaten Pangandaran" },
    { kota: "Kabupaten Purwakarta" },
    { kota: "Kabupaten Subang" },
    { kota: "Kabupaten Sukabumi" },
    { kota: "Kabupaten Sumedang" },
    { kota: "Kabupaten Tasikmalaya" },
    { kota: "Kota Bandung" },
    { kota: "Kota Banjar" },
    { kota: "Kota Bekasi" },
    { kota: "Kota Bogor" },
    { kota: "Kota Cimahi" },
    { kota: "Kota Cirebon" },
    { kota: "Kota Depok" },
    { kota: "Kota Sukabumi" },
    { kota: "Kota Tasikmalaya" },
  ],
  jateng: [
    { kota: "Kabupaten Banjarnegara" },
    { kota: "Kabupaten Banyumas" },
    { kota: "Kabupaten Batang" },
    { kota: "Kabupaten Blora" },
    { kota: "Kabupaten Boyolali" },
    { kota: "Kabupaten Brebes" },
    { kota: "Kabupaten Cilacap" },
    { kota: "Kabupaten Demak" },
    { kota: "Kabupaten Grobogan" },
    { kota: "Kabupaten Jepara" },
    { kota: "Kabupaten Karanganyar" },
    { kota: "Kabupaten Kebumen" },
    { kota: "Kabupaten Kendal" },
    { kota: "Kabupaten Klaten" },
    { kota: "Kabupaten Kudus" },
    { kota: "Kabupaten Magelang" },
    { kota: "Kabupaten Pati" },
    { kota: "Kabupaten Pekalongan" },
    { kota: "Kabupaten Pemalang" },
    { kota: "Kabupaten Purbalingga" },
    { kota: "Kabupaten Purworejo" },
    { kota: "Kabupaten Rembang" },
    { kota: "Kabupaten Semarang" },
    { kota: "Kabupaten Sragen" },
    { kota: "Kabupaten Sukoharjo" },
    { kota: "Kabupaten Tegal" },
    { kota: "Kabupaten Temanggung" },
    { kota: "Kabupaten Wonogiri" },
    { kota: "Kabupaten Wonosobo" },
    { kota: "Kota Magelang" },
    { kota: "Kota Pekalongan" },
    { kota: "Kota Salatiga" },
    { kota: "Kota Semarang" },
    { kota: "Kota Surakarta" },
    { kota: "Kota Tegal" },
  ],
  yogya: [
    { kota: "Kabupaten Bantul" },
    { kota: "Kabupaten Gunungkidul" },
    { kota: "Kabupaten Kulon Progo" },
    { kota: "Kabupaten Sleman" },
    { kota: "Kota Yogyakarta" },
  ],
  dki: [
    { kota: "Kepulauan Seribu" },
    { kota: "Jakarta Barat" },
    { kota: "Jakarta Pusat" },
    { kota: "Jakarta Selatan" },
    { kota: "Jakarta Timur" },
    { kota: "Jakarta Utara" },
  ],
  banten: [
    { kota: "Kabupaten Lebak" },
    { kota: "Kabupaten Pandeglang" },
    { kota: "Kabupaten Serang" },
    { kota: "Kabupaten Tangerang" },
    { kota: "Kota Cilegon" },
    { kota: "Kota Serang" },
    { kota: "Kota Tangerang" },
    { kota: "Kota Tangerang Selatan" },
  ],
};

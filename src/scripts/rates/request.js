import { addToDataBase } from '../general/dataBase.js'


export const requestRates = async () => {
  const response = await fetch('https://api.exchangerate.host/latest')
  const dataRates = await response.json()
  const { rates } = await dataRates
  const ratesList = Object.entries(rates)

  ratesList.forEach(([currency, sum]) => {
    const currentRate = {
      currency,
      iconName: currency,
      id: currency,
      sum,
    }

    addToDataBase(currentRate, 'ratesList', 'obj')
  })
}



// const dataRate = {
//   base: "EUR",
//   date: "2021-07-03",
//   rate: {
//     AED: 4.358137,
//     AFN: 94.029983,
//     ALL: 122.589978,
//     AMD: 589.049895,
//     ANG: 2.123,
//     AOA: 765.2928,
//     ARS: 113.26318,
//     AUD: 1.576535,
//     AWG: 2.136293,
//     AZN: 2.02176,
//     BAM: 1.95583,
//     BBD: 2.388,
//     BDT: 100.347882,
//     BGN: 1.9558,
//     BHD: 0.4473,
//     BIF: 2341.759584,
//     BMD: 1.1865,
//     BND: 1.5978,
//     BOB: 8.178499,
//     BRL: 5.970899,
//     BSD: 1.1827,
//     BTC: 0.000034168646,
//     BTN: 88.375784,
//     BWP: 12.996898,
//     BYN: 3.006799,
//     BYR: 23255.39587,
//     BZD: 2.384,
//     CAD: 1.461952,
//     CDF: 2374.186508,
//     CHF: 1.092674,
//     CLF: 0.031633,
//     CLP: 872.84904,
//     CNY: 7.680261,
//     COP: 4468.299206,
//     CRC: 733.44987,
//     CUC: 1.1865,
//     CUP: 31.442244,
//     CVE: 110.26498,
//     CZK: 25.57216,
//     DJF: 210.549963,
//     DKK: 7.435765,
//     DOP: 67.343988,
//     DZD: 159.382972,
//     EGP: 18.591997,
//     ERN: 17.799869,
//     ETB: 51.739991,
//     EUR: 1,
//     FJD: 2.463708,
//     FKP: 0.841042,
//     GBP: 0.858383,
//     GEL: 3.743454,
//     GGP: 0.841042,
//     GHS: 6.983999,
//     GIP: 0.841042,
//     GMD: 60.689927,
//     GNF: 11610.797938,
//     GTQ: 9.166098,
//     GYD: 247.439956,
//     HKD: 9.213919,
//     HNL: 28.236995,
//     HRK: 7.489234,
//     HTG: 107.627981,
//     HUF: 351.699942,
//     IDR: 17156.253028,
//     ILS: 3.882916,
//     IMP: 0.841042,
//     INR: 88.416189,
//     IQD: 1725.589694,
//     IRR: 49957.574045,
//     ISK: 147.102702,
//     JEP: 0.841042,
//     JMD: 176.431969,
//     JOD: 0.841275,
//     JPY: 131.743051,
//     KES: 128.142394,
//     KGS: 100.591932,
//     KHR: 4817.199144,
//     KMF: 492.876517,
//     KPW: 1067.850226,
//     KRW: 1341.658822,
//     KWD: 0.357445,
//     KYD: 0.9856,
//     KZT: 504.77991,
//     LAK: 11219.298007,
//     LBP: 1788.299682,
//     LKR: 235.952658,
//     LRD: 203.489192,
//     LSL: 17.050455,
//     LTL: 3.503426,
//     LVL: 0.717702,
//     LYD: 5.343399,
//     MAD: 10.578098,
//     MDL: 21.401296,
//     MGA: 4639.219176,
//     MKD: 61.614989,
//     MMK: 1946.756854,
//     MNT: 3376.776352,
//     MOP: 9.463698,
//     MRO: 423.580221,
//     MUR: 51.139991,
//     MVR: 18.276536,
//     MWK: 943.219832,
//     MXN: 23.460008,
//     MYR: 4.939997,
//     MZN: 75.36058,
//     NAD: 17.05045,
//     NGN: 488.249085,
//     NIO: 41.305993,
//     NOK: 10.198564,
//     NPR: 141.400975,
//     NZD: 1.688127,
//     OMR: 0.45681,
//     PAB: 1.1827,
//     PEN: 4.577799,
//     PGK: 4.152799,
//     PHP: 58.26899,
//     PKR: 186.160067,
//     PLN: 4.510128,
//     PYG: 7984.998582,
//     QAR: 4.320091,
//     RON: 4.928132,
//     RSD: 117.604979,
//     RUB: 86.847084,
//     RWF: 1189.839789,
//     SAR: 4.449631,
//     SBD: 9.526332,
//     SCR: 17.442997,
//     SDG: 536.895519,
//     SEK: 10.128283,
//     SGD: 1.598338,
//     SHP: 0.841042,
//     SLL: 12177.047739,
//     SOS: 694.102778,
//     SRD: 24.950949,
//     STD: 24214.676354,
//     SVC: 10.348998,
//     SYP: 1492.428907,
//     SZL: 17.094397,
//     THB: 38.117537,
//     TJS: 13.488898,
//     TMT: 4.164614,
//     TND: 3.288389,
//     TOP: 2.676922,
//     TRY: 10.310569,
//     TTD: 8.026799,
//     TWD: 33.119485,
//     TZS: 2742.729513,
//     UAH: 32.431394,
//     UGX: 4210.499252,
//     USD: 1.1865,
//     UYU: 51.560991,
//     UZS: 12552.84777,
//     VEF: 253709513742.5991,
//     VND: 27203.995168,
//     VUV: 128.664991,
//     WST: 2.99232,
//     XAF: 655.956883,
//     XAG: 0.044818,
//     XAU: 0.000664,
//     XCD: 3.206575,
//     XDR: 0.8292,
//     XOF: 655.956883,
//     XPF: 119.836873,
//     YER: 296.866516,
//     ZAR: 16.921398,
//     ZMK: 10679.926166,
//     ZMW: 26.797495,
//     ZWL: 382.053325,
//   },
//   success: true,
//   timestamp: 1625325844,
// }
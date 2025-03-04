import moment from "moment";

export default function conversionData(data: string): string {
  if(data.includes('.')) {
    return moment(data, 'DD.MM.YYYY').format('YYYY-MM-DD');
  } else {
    return moment(data).format('DD.MM.YYYY');
  }
}

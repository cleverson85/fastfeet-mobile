import { parseISO } from 'date-fns';
import format from 'date-fns/format';

const util = {
  FormatDate(value) {
    return format(parseISO(value), 'dd/MM/yyyy');
  },

  CepMask(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{3})/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  },

  GetStatus(data) {
    let status = 'Pendente';

    if (!data.start_date && !data.end_date) {
      status = 'Aguardando retirada';
    }

    if (data.start_date && !data.end_date) {
      status = 'Retirada';
    }

    if (data.start_date && data.end_date) {
      status = 'Entregue';
    }

    return status;
  }
};

export default util;

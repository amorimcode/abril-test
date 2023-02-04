import i18n from '@/i18n/i18n';

const translate = (key: string) => {
  return i18n.t(key ?? 'APP.NOT_FOUND');
};

export default translate;

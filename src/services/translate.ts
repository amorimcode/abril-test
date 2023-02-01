import { useTranslation } from 'react-i18next';

const translate = (key: string) => {
  const { t } = useTranslation();

  return t(key ?? 'APP.NOT_FOUND');
};

export default translate;

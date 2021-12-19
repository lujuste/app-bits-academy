import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import pt from '../../public/locale/pt';
import en from '../../public/locale/en';

interface TranslateContextProps {
  children: ReactNode;
}

const TranslateContext = createContext({});

export function TranslateProvider({ children }: TranslateContextProps) {
  const { i18n } = useTranslation();

  const [english, setEnglish] = useState<boolean>(false);
  const router = useRouter();
  const { locale } = router;
  const t: any = locale === 'pt-BR' ? pt : en;

  return (
    <TranslateContext.Provider value={{ english, setEnglish, t }}>
      {children}
    </TranslateContext.Provider>
  );
}

export const useTranslate = () => useContext(TranslateContext);

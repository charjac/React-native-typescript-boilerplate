import 'intl'
import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import frLocaleData from 'react-intl/locale-data/fr'

import enTranslationMessages from '../__translations__/en.json'
import frTranslationMessages from '../__translations__/fr.json'

import config from 'config'

/**
 * add helpers to format date strings and all the i18n magic
 */
addLocaleData(enLocaleData)
addLocaleData(frLocaleData)

export const formatTranslationMessages: any = (
    locale: string,
    messages: any
) => {
    const defaultFormattedMessages: any =
        locale !== config.LANGUAGE.DEFAULT_LOCALE
            ? formatTranslationMessages(
                  config.LANGUAGE.DEFAULT_LOCALE,
                  enTranslationMessages
              )
            : {}
    const formattedMessages: any = {}
    const messageKeys = Object.keys(messages)

    for (const messageKey of messageKeys) {
        formattedMessages[messageKey] =
            locale === config.LANGUAGE.DEFAULT_LOCALE
                ? messages[messageKey]
                : (formattedMessages[messageKey] =
                      messages[messageKey] ||
                      defaultFormattedMessages[messageKey])
    }

    return formattedMessages
}

export const translationMessages: any = {
    en: formatTranslationMessages('en', enTranslationMessages),
    fr: formatTranslationMessages('fr', frTranslationMessages),
}

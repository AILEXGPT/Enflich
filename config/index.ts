import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',  // Fügen Sie hier Ihre App-Beschreibung ein
  copyright: '',    // Fügen Sie hier Urheberrechtsinformationen ein
  privacy_policy: '',  // Fügen Sie hier die Datenschutzrichtlinie ein
  default_language: 'de'  // Standardsprache auf Deutsch gesetzt
}

export const isShowPrompt = true
export const promptTemplate = ''  // Sie können hier eine Vorlage für Eingabeaufforderungen einstellen

}
export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://repvlwyhsgsledxnxzkw.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlcHZsd3loc2dzbGVkeG54emt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0Nzc3NDMsImV4cCI6MjAxODA1Mzc0M30.BGo3NgLE4PzOikRpQq8jmCF8QYUUMwiftv_TX3Lmcmo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

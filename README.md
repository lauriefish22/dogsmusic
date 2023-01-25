let { data: bands, error } = await supabase
.from('bands')
.eq('id', 2)

.select('\*');

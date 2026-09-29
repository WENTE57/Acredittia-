-- Migración para añadir archivo_ejemplo a requisito_templates
ALTER TABLE requisito_templates ADD COLUMN archivo_ejemplo text;

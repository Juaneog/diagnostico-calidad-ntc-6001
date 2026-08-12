import { IClause, CompanySize, EvidenceStatus, IsoStandard } from './types';
import { NTC_6001_DATA } from './standards/ntc6001';

type StandardConfig = { name: string; description: string; data: IClause[]; detailsHTML: string };

export const ALL_STANDARDS: Record<IsoStandard, StandardConfig> = {
  ntc_6001: {
    name: 'NTC 6001 (Sistema de Gestión para MiPymes)',
    description: 'Requisitos para establecer, implementar, mantener y mejorar un sistema de gestión en micro y pequeñas empresas.',
    data: NTC_6001_DATA,
    detailsHTML: `
      <div class="space-y-4 text-slate-700">
        <p><strong>La Norma Técnica Colombiana NTC 6001</strong> orienta a las micro y pequeñas empresas en la estructuración de un sistema de gestión que fortalezca su competitividad, sostenibilidad y capacidad de mejora.</p>
        <h4 class="font-semibold text-slate-800 mt-4">Áreas principales:</h4>
        <ul class="list-disc list-inside space-y-2 pl-4">
          <li>Contexto de la organización y partes interesadas.</li>
          <li>Liderazgo, planificación y gestión de riesgos.</li>
          <li>Procesos de apoyo, operación, evaluación y mejora.</li>
        </ul>
      </div>
    `,
  },
};

export const STANDARDS_CONFIG = ALL_STANDARDS;
export const getQuestionnaireData = (standard: IsoStandard): IClause[] => ALL_STANDARDS[standard]?.data || [];

export const EVIDENCE_POINTS: Record<EvidenceStatus, number> = {
  implemented: 2,
  in_progress: 1,
  not_implemented: 0,
  not_applicable: 0,
};

export const COMPANY_SIZE_OPTIONS: { id: CompanySize; label: string }[] = [
  { id: 'pequeña', label: 'Pequeña (1-50 empleados)' },
  { id: 'mediana', label: 'Mediana (51-250 empleados)' },
  { id: 'grande', label: 'Grande (251+ empleados)' },
];

export const EVIDENCE_STATUS_OPTIONS: { id: EvidenceStatus; label: string }[] = [
  { id: 'implemented', label: 'Implementado' },
  { id: 'in_progress', label: 'En Proceso' },
  { id: 'not_implemented', label: 'No Implementado' },
  { id: 'not_applicable', label: 'No Aplica' },
];

export const COMMENT_PLACEHOLDER_EXAMPLE = 'Ej: Existe un procedimiento documentado, pero requiere actualización y verificación de los registros asociados.';

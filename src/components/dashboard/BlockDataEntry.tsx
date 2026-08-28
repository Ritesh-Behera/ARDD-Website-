'use client';

import React, { useState } from 'react';
import { useCurrentScope } from '@/context/ScopeContext';
import { useAuth } from '@/context/AuthContext';
import { PlusCircle, Save, X, CheckCircle2, AlertCircle, Syringe, Milk, Activity, HeartHandshake, ShieldCheck } from 'lucide-react';
import { getBlockById, getSubdivisionById, getDistrictById } from '@/data/mockData';

interface BlockDataEntryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlockDataEntry: React.FC<BlockDataEntryProps> = ({ isOpen, onClose }) => {
  const { currentUser } = useAuth();
  const { currentScope, updateBlockMetrics } = useCurrentScope();

  // STRICT ROLE GUARD: Only BlockHead role is authorized
  if (currentUser.role !== 'BlockHead' || !isOpen) {
    return null;
  }

  const activeBlock = getBlockById(currentUser.blockId);
  const sub = getSubdivisionById(activeBlock?.subdivisionId);
  const dist = getDistrictById(activeBlock?.districtId);

  // Form State initialized with current block values
  const [formData, setFormData] = useState({
    cattleCount: activeBlock?.metrics.cattleCount || 0,
    buffaloCount: activeBlock?.metrics.buffaloCount || 0,
    goatSheepCount: activeBlock?.metrics.goatSheepCount || 0,
    poultryCount: activeBlock?.metrics.poultryCount || 0,
    vaccinationsDone: activeBlock?.metrics.vaccinationsDone || 0,
    vaccinationTarget: activeBlock?.metrics.vaccinationTarget || 0,
    artificialInseminations: activeBlock?.metrics.artificialInseminations || 0,
    milkProductionLitersDay: activeBlock?.metrics.milkProductionLitersDay || 0,
    veterinaryCampsOrganized: activeBlock?.metrics.veterinaryCampsOrganized || 0,
    schemeBeneficiaries: activeBlock?.metrics.schemeBeneficiaries || 0,
    diseaseAlerts: activeBlock?.metrics.diseaseAlerts || 0,
  });

  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Math.max(0, isNaN(value) ? 0 : value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser.blockId) return;

    setIsSubmitting(true);

    try {
      updateBlockMetrics(currentUser.blockId, formData);
      setNotification({
        type: 'success',
        message: `Field data successfully recorded and aggregated for ${activeBlock?.name}!`,
      });
      setTimeout(() => {
        setIsSubmitting(false);
        onClose();
        setNotification(null);
      }, 1200);
    } catch (err) {
      setIsSubmitting(false);
      setNotification({
        type: 'error',
        message: 'Failed to update block records. Please retry.',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-900">
                Block Veterinary Officer Data Entry Portal
              </h2>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-200 uppercase">
                Block Head Only
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Assigned to: <strong className="text-gray-800">{activeBlock?.name}</strong> • {sub?.name} • {dist?.name}
            </p>
          </div>
        </div>

        {/* Feedback Alert */}
        {notification && (
          <div
            className={`mb-4 p-3 rounded-xl text-xs flex items-center gap-2 ${
              notification.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Section 1: Livestock Census Count */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>1. Livestock Population Count</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Cattle Count</label>
                <input
                  type="number"
                  value={formData.cattleCount}
                  onChange={(e) => handleChange('cattleCount', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Buffalo Count</label>
                <input
                  type="number"
                  value={formData.buffaloCount}
                  onChange={(e) => handleChange('buffaloCount', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Goat & Sheep</label>
                <input
                  type="number"
                  value={formData.goatSheepCount}
                  onChange={(e) => handleChange('goatSheepCount', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Poultry Count</label>
                <input
                  type="number"
                  value={formData.poultryCount}
                  onChange={(e) => handleChange('poultryCount', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2: Vaccination & Breeding Services */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Syringe className="w-4 h-4 text-emerald-600" />
              <span>2. Veterinary Field Operations & Insemination</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Vaccinations Administered</label>
                <input
                  type="number"
                  value={formData.vaccinationsDone}
                  onChange={(e) => handleChange('vaccinationsDone', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Vaccination Target</label>
                <input
                  type="number"
                  value={formData.vaccinationTarget}
                  onChange={(e) => handleChange('vaccinationTarget', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">AI Done (Breed Mission)</label>
                <input
                  type="number"
                  value={formData.artificialInseminations}
                  onChange={(e) => handleChange('artificialInseminations', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 3: Milk & Health Camps */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Milk className="w-4 h-4 text-amber-600" />
              <span>3. Production & Welfare Services</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Daily Milk Production (Liters)</label>
                <input
                  type="number"
                  value={formData.milkProductionLitersDay}
                  onChange={(e) => handleChange('milkProductionLitersDay', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Health Camps Organized</label>
                <input
                  type="number"
                  value={formData.veterinaryCampsOrganized}
                  onChange={(e) => handleChange('veterinaryCampsOrganized', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Scheme Beneficiaries</label>
                <input
                  type="number"
                  value={formData.schemeBeneficiaries}
                  onChange={(e) => handleChange('schemeBeneficiaries', parseInt(e.target.value))}
                  className="w-full text-xs font-semibold px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  required
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Directly updates in-memory single source of truth</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors disabled:opacity-50"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Recording...' : 'Submit & Recalculate KPIs'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

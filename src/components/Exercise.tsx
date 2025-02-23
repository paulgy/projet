import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type Answers = {
  ind1982: string;
  ind2021: string;
  diffPoints: string;
  microEnt: string;
  hommes: string;
  femmes: string;
  plus50: string;
  age2549: string;
  age1524: string;
  totalSalaries: string;
  cdiTotal: string;
  cdiFemmes: string;
  cdiHommes: string;
  cddInterim: string;
  cdd: string;
  interim: string;
  cddFemmes: string;
  cddHommes: string;
  interimFemmes: string;
  interimHommes: string;
  cddJeunes: string;
  interimJeunes: string;
  alternanceJeunes: string;
  augmentation: string;
  pic2017: string;
};

const Exercise: React.FC = () => {  // Ajout du type React.FC
  const [answers, setAnswers] = useState<Answers>({
    ind1982: '',
    ind2021: '',
    diffPoints: '',
    microEnt: '',
    hommes: '',
    femmes: '',
    plus50: '',
    age2549: '',
    age1524: '',
    totalSalaries: '',
    cdiTotal: '',
    cdiFemmes: '',
    cdiHommes: '',
    cddInterim: '',
    cdd: '',
    interim: '',
    cddFemmes: '',
    cddHommes: '',
    interimFemmes: '',
    interimHommes: '',
    cddJeunes: '',
    interimJeunes: '',
    alternanceJeunes: '',
    augmentation: '',
    pic2017: ''
  });

  const [showFeedback, setShowFeedback] = useState(false);

  const correctAnswers = {
    ind1982: 18.6,
    ind2021: 12.6,
    diffPoints: 6,
    microEnt: 3.0,
    hommes: 15.6,
    femmes: 9.5,
    plus50: 16.5,
    age2549: 11.8,
    age1524: 3.8,
    totalSalaries: 87.4,
    cdiTotal: 73.7,
    cdiFemmes: 75.8,
    cdiHommes: 71.7,
    cddInterim: 9.8,
    cdd: 7.7,
    interim: 2.0,
    cddFemmes: 9.5,
    cddHommes: 6.0,
    interimFemmes: 1.3,
    interimHommes: 2.7,
    cddJeunes: 21.0,
    interimJeunes: 5.6,
    alternanceJeunes: 26.7,
    augmentation: 0.4,
    pic2017: 11.0
  };

  const handleInputChange = (field: keyof Answers, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const checkAnswers = () => {
    setShowFeedback(true);
  };

  const resetExercise = () => {
    setAnswers({
      ind1982: '',
      ind2021: '',
      diffPoints: '',
      microEnt: '',
      hommes: '',
      femmes: '',
      plus50: '',
      age2549: '',
      age1524: '',
      totalSalaries: '',
      cdiTotal: '',
      cdiFemmes: '',
      cdiHommes: '',
      cddInterim: '',
      cdd: '',
      interim: '',
      cddFemmes: '',
      cddHommes: '',
      interimFemmes: '',
      interimHommes: '',
      cddJeunes: '',
      interimJeunes: '',
      alternanceJeunes: '',
      augmentation: '',
      pic2017: ''
    });
    setShowFeedback(false);
  };

  const createInput = (field: keyof Answers, size: number = 5) => (
    <input
      type="number"
      step="0.1"
      className={`w-${size} px-2 py-1 border rounded mx-1 ${
        showFeedback
          ? Number(answers[field]) === correctAnswers[field]
            ? 'bg-green-100 border-green-500'
            : 'bg-red-100 border-red-500'
          : 'border-gray-300'
      }`}
      value={answers[field]}
      onChange={(e) => handleInputChange(field, e.target.value)}
    />
  );

  return (  // Ajout explicite du return
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Exercice : L&apos;évolution de l&apos;emploi en France</h2>
        
        <div className="mb-6 space-y-4">
          <p>
            Alors que les indépendants représentaient encore {createInput('ind1982')}% de la population active occupée en 1982, 
            ils ne représentent plus que {createInput('ind2021')}% des personnes en emploi en 2021, soit une baisse de {createInput('diffPoints')} points de %.
          </p>
          
          <p>
            Ce mouvement est porté notamment par le statut des micro-entrepreneurs qui représentent {createInput('microEnt')}% de l&apos;emploi en 2021.
            La part des indépendants est plus élevée pour les hommes ({createInput('hommes')}%, contre {createInput('femmes')}% des femmes) 
            et les 50 ans ou plus ({createInput('plus50')}%, contre {createInput('age2549')}% des 25-49 ans et {createInput('age1524')}% des 15-24 ans).
          </p>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={checkAnswers}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Vérifier
          </button>
          <button
            onClick={resetExercise}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Recommencer
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Exercise;
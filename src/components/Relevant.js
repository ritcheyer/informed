import React, { useMemo, useContext } from 'react';
import { RelevanceContext, ScopeContext } from '../Context';
import { useFormController } from '../hooks/useFormController';
import { useRelevance } from '../hooks/useRelevance';

export const Relevant = ({ when, relevanceWhen, relevanceDeps, children }) => {
  const formController = useFormController();

  const scope = useContext(ScopeContext);

  const isRelevant = useRelevance({
    relevant: when,
    relevanceWhen,
    relevanceDeps
  });

  const relevantContext = useMemo(
    () => {
      return {
        isRelevant,
        relevant: () =>
          when({
            formState: formController.getFormState(),
            formApi: formController.getFormApi(),
            scope,
            relevanceDeps
          })
      };
    },
    [isRelevant, scope, relevanceDeps]
  );

  return (
    <RelevanceContext.Provider value={relevantContext}>
      {isRelevant ? children : null}
    </RelevanceContext.Provider>
  );
};

// import React, { useMemo, useContext } from 'react';
// import { useFormState } from '../hooks/useFormState';
// import { useFormApi } from '../hooks/useFormApi';
// import { RelevanceContext, ScopeContext } from '../Context';
// import { useFormController } from '../hooks/useFormController';

// export const Relevant = ({ when, children }) => {
//   const formState = useFormState();
//   const formApi = useFormApi();
//   const formController = useFormController();
//   const scope = useContext(ScopeContext);

//   const isRelevant = when({
//     formState,
//     formApi,
//     scope
//   });

//   const relevantContext = useMemo(
//     () => {
//       return {
//         isRelevant,
//         relevant: () =>
//           when({
//             formState: formController.getFormState(),
//             formApi: formController.getFormApi(),
//             scope
//           })
//       };
//     },
//     [isRelevant]
//   );

//   return (
//     <RelevanceContext.Provider value={relevantContext}>
//       {isRelevant ? children : null}
//     </RelevanceContext.Provider>
//   );
// };

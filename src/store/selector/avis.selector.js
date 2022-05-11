import { createSelector } from "@reduxjs/toolkit"

export const avisSelector = (state) => state.avis

export const notesSelector = createSelector(avisSelector, (state) => state.notes)
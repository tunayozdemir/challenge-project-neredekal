import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Ayarlar durumu için arayüz
interface SettingsState {
    itemsPerPage: number;
}

// Başlangıç durumu
const initialState: SettingsState = {
    itemsPerPage: 10, // Başlangıçta sayfa başına 10 öğe
};

// `settings` dilimini oluşturma
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        // `itemsPerPage` değerini güncellemek için bir eylem
        setItemsPerPage: (state, action: PayloadAction<number>) => {
            state.itemsPerPage = action.payload;
        },
    },
});

// Dilimden eylemleri ve azaltıcıyı (reducer) dışa aktar
export const { setItemsPerPage } = settingsSlice.actions;
export default settingsSlice.reducer;

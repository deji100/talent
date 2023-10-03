import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

interface Values {
  work_email: string,
  full_name: string,
  company_name: string,
  phone_number: string,
  specializations: string[],
  skills: string[],
  staffing_types: string[],
  budget: string,
  experience_levels: string[],
  comment: string
}

export const PostTalentFormData = createAsyncThunk(
  "PostTalentFormData",
  async (args: Values) => {
    console.log(args)
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(args),
      };
      const url = ``;
      const response = await fetch(url, config);
      const result = await response.json();
      return result;

    } catch (err) {
      if (err instanceof Error) {
        return err;
      }
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  errorMessage: "",
  successful: null,
  talentFormData: {
    work_email: "",
    full_name: "",
    company_name: "",
    phone_number: "",
    specializations: [],
    skills: [],
    staffing_types: [],
    budget: "",
    experience_levels: [],
    comment: "",
  },
};

const TalentSlice = createSlice({
  name: "talent",
  initialState: initialState,
  reducers: {
    Set_Default_Form_State: (state) => {
      state.talentFormData = {
        work_email: "",
        full_name: "",
        company_name: "",
        phone_number: "",
        specializations: [],
        skills: [],
        staffing_types: [],
        budget: "",
        experience_levels: [],
        comment: "",
      };
    },

    Assign_Info_Values: (state, { payload }) => {
      const { work_email, full_name, company_name, phone_number } = payload;
      const currentInfoState = current(state.talentFormData);
      state.talentFormData = {
        ...currentInfoState,
        work_email,
        full_name,
        company_name,
        phone_number,
      };
    },

    Assign_Specializations: (state, { payload }) => {
      const currentInfoState = current(state.talentFormData);
      state.talentFormData = { ...currentInfoState, specializations: payload };
    },

    Assign_Staffing_Type: (state, { payload }) => {
      const currentInfoState = current(state.talentFormData);
      state.talentFormData = { ...currentInfoState, staffing_types: payload };
    },

    Assign_Experiences: (state, { payload }) => {
      const currentInfoState = current(state.talentFormData);
      state.talentFormData = {
        ...currentInfoState,
        experience_levels: payload,
      };
    },

    Assign_Budget: (state, { payload }) => {
      const currentInfoState = current(state.talentFormData);
      state.talentFormData = {
        ...currentInfoState,
        budget: payload,
      };
    },

    Assign_Comment: (state, { payload }) => {
      const currentInfoState = current(state.talentFormData);
      state.talentFormData = {
        ...currentInfoState,
        comment: payload,
      };
    },

    Assign_Skills: (state, { payload }) => {
      const currentInfoState = current(state.talentFormData);
      state.talentFormData = {
        ...currentInfoState,
        skills: payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PostTalentFormData.pending, (state) => {
        state.loading = true;
      })
      .addCase(PostTalentFormData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(PostTalentFormData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default TalentSlice.reducer;
export const {
  Set_Default_Form_State,
  Assign_Info_Values,
  Assign_Specializations,
  Assign_Staffing_Type,
  Assign_Experiences,
  Assign_Budget,
  Assign_Comment,
  Assign_Skills,
} = TalentSlice.actions;

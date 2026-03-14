export const supabase = {
  from: (table) => ({
    insert: async (data) => {
      console.log(`Mock insert into ${table}:`, data);
      return { data: null, error: null };
    },
    select: async () => {
      console.log(`Mock select from ${table}`);
      return { data: [], error: null };
    }
  })
};

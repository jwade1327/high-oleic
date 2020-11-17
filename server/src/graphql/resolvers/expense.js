const expenseCategories = require('../../profit-calculator/categories/expenses');

module.exports = {
  /**
   *
   */
  ExpenseCategory: {
    /**
     *
     */
    id({ type }) {
      return type;
    },

    /**
     *
     */
    lineItems({ lineItems }, { input }) {
      const { cropType } = input;
      if (!cropType) return lineItems;
      return lineItems.filter(({ when }) => {
        if (!when) return true;
        return when({ cropType });
      });
    },
  },

  /**
   *
   */
  ExpenseCategoryLineItem: {
    /**
     *
     */
    id({ categoryType, type }) {
      return `${categoryType}.${type}`;
    },

    /**
     *
     */
    fixed({ fixed }) {
      return Boolean(fixed);
    },
  },

  /**
   *
   */
  ExpenseCategoryTypeEnum: {
    CROP: 'crop',
    FIELD_OPS: 'fieldOps',
    HANDLING: 'handling',
  },

  /**
   *
   */
  ExpenseCategoryCropLineItemEnum: {
    LAND: 'land',
    TAX: 'tax',
    RTM: 'rtm',
    INTEREST: 'int',
    INSURANCE: 'ins',
    SEEDS: 'seeds',
    FERT_LIME: 'fertLime',
    NITROGEN: 'nitro',
    CHEMICALS: 'chem',
  },

  /**
   *
   */
  ExpenseCategoryFieldOpsLineItemEnum: {
    NITROGEN: 'nitro',
    CULTIVATION: 'cult',
    PLANTER: 'planter',
    DRILL: 'drill',
    SPRAYER: 'sprayer',
    COMBINE: 'combine',
    VRT: 'vrt',
    OTHER: 'other',
  },

  /**
   *
   */
  ExpenseCategoryHandlingLineItemEnum: {
    HAULING: 'hauling',
    DRYER: 'dryer',
    STORAGE: 'storage',
  },

  /**
   *
   */
  Query: {
    /**
     *
     */
    expenseCategories(_, { input }) {
      const { types } = input;
      if (!types.length) return expenseCategories;
      return expenseCategories.filter((category) => types.includes(category.type));
    },
  },
};
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

import "./ExpenseForm.css";
import { useEffect } from "react";

export default function ExpenseForm({
    fromSelectValues = [],
    editForm,
    onExpenseSubmit,
}) {
    // Translation
    const { t } = useTranslation();

    const validationSchema = yup.object({
        from: yup.string("From is Required").required("From is required"),
        expenseLabel: yup
            .string("Expense Label is string")
            .required("Expense Label is required"),
        amount: yup
            .number("Amount must be number")
            .positive("Amount must be positive Number")
            .required("Amount is Required"),
    });
    const formik = useFormik({
        initialValues: {
            from: "Incomes",
            expenseLabel: "",
            amount: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onExpenseSubmit?.(values);
            formik?.resetForm();
        },
        onReset: (value) => { },
    });

    useEffect(() => {
        if (editForm) {
            formik.setValues(editForm, true);
        }
    }, [editForm]);

    return (
        <form
            className="form-wrapper"
            name="expense-form"
            data-testid="expense-form-test"
            onSubmit={formik.handleSubmit}
            onReset={formik.handleReset}
        >
            <div className="form-fields">
                <div className="form-field">
                    <label className="form-field__label" htmlFor="email">
                        {t("expenseForm.fromLabel")}
                    </label>
                    <div className="form-field__input">
                        <select
                            data-testid="from-test"
                            name="from"
                            id="from"
                            value={formik.values.from}
                            onChange={formik.handleChange}
                        >
                            {fromSelectValues.map((fromSelectValue) => {
                                return (
                                    <option
                                        key={fromSelectValue.value}
                                        value={fromSelectValue.value}
                                    >
                                        {fromSelectValue.label}
                                    </option>
                                );
                            })}
                        </select>
                        {formik.touched.from && Boolean(formik.errors.from) && (
                            <p className="error">{formik.errors.from}</p>
                        )}
                    </div>
                </div>

                <div className="form-field">
                    <label className="form-field__label" htmlFor="expenseLabel">
                        {t("expenseForm.expenseLabel")}
                    </label>
                    <div className="form-field__input">
                        <input
                            data-testid="expenseLabel-test"
                            id="expenseLabel"
                            name="expenseLabel"
                            type="expenseLabel"
                            onChange={formik.handleChange}
                            value={formik.values.expenseLabel}
                        />
                        {formik.touched.expenseLabel &&
                            Boolean(formik.errors.expenseLabel) && (
                                <p className="error">{formik.errors.expenseLabel}</p>
                            )}
                    </div>
                </div>

                <div className="form-field">
                    <label className="form-field__label" htmlFor="amount">
                        {t("expenseForm.amountLabel")}
                    </label>
                    <div className="form-field__input">
                        <input
                            data-testid="amount-test"
                            id="amount"
                            name="amount"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.amount}
                        />
                        {formik.touched.amount && Boolean(formik.errors.amount) && (
                            <p className="error">{formik.errors.amount}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="form-submit">
                <button data-testid="reset-button-test" type="reset">{t("expenseForm.resetButton")}</button>
                <button data-testid="submit-button-test" type="submit">{t("expenseForm.submitButton")}</button>
            </div>
        </form>
    );
}

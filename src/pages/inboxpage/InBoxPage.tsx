import { useForm, FormProvider } from "react-hook-form";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
// import { ClearBtn, SearchBtn } from "../../../../../components/button";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HDatePicker from "../../components/hook-form/HDatePicker";
import HSelect from "../../components/hook-form/HSelect";
import HTextfield from "../../components/hook-form/HTextfield";
import { RequestBtn } from "../../components/button";
import ModalDisplay from "../../components/modal/ModalDisplay";

interface FormData {
    createDate: string;
    documentType: string;
    workflowStatus: string;
}

const InBoxPage = () => {
    const navigate = useNavigate();
    const methods = useForm<FormData>({
        defaultValues: {
            createDate: "",
            documentType: "",
            workflowStatus: "",
        },
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { handleSubmit, reset, getValues, register } = methods;

    const onSubmit = (data: FormData) => {
        console.log("Submitted Data:", getValues()); // Will log the entire form data
    };

    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                        container
                        direction="row"
                        spacing={1}
                        columns={16}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            mb: 2,
                        }}
                    >
                        <Grid item xs={4.3}>
                            <Typography variant="body2" className="inputHField">
                                Create Date
                            </Typography>
                            <HDatePicker
                                name="createdate"
                                placeholder="Placeholder"
                                width={"100%"}
                            />
                        </Grid>
                        <Grid item xs={4.3}>
                            <Typography variant="body2" className="inputHField">
                                Document Type
                            </Typography>
                            <HSelect
                                name="status"
                                placeholder="Placeholder"
                                defaultValue="0"
                                width={"100%"}
                            />
                        </Grid>
                        <Grid item xs={4.3}>
                            <Typography variant="body2" className="inputHField">
                                Workflow Status
                            </Typography>
                            <HSelect
                                name="status"
                                placeholder="Placeholder"
                                defaultValue="0"
                                width={"100%"}
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <Stack direction="row" spacing={1}>
                                <RequestBtn onClick={() => setIsModalOpen(true)} type="submit" variant="contained" />
                                <ModalDisplay open={isModalOpen} onClose={() => setIsModalOpen(false)} />
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </div>
    );
};

export default InBoxPage;

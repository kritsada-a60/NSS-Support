import { useForm, FormProvider } from "react-hook-form";
import { Grid, IconButton, Stack, Typography, Box } from "@mui/material";
// import { ClearBtn, SearchBtn } from "../../../../../components/button";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HDatePicker from "../../components/hook-form/HDatePicker";
import HSelect from "../../components/hook-form/HSelect";
import HTextfield from "../../components/hook-form/HTextfield";
import ModalDisplay from "../../components/modal/ModalDisplay";
import Card from "@mui/material/Card";
import { CancelBtn } from "../../components/button";
import { SaveBtn } from "../../components/button";

interface FormData {
    createDate: string;
    documentType: string;
    workflowStatus: string;
}

const ConfigPaymentMethod = () => {
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
            <Card>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid
                            container
                            direction="row"
                            spacing={2} // ลด spacing เพื่อลดช่องว่าง
                            columns={12} // ลดขนาดของ column เพื่อให้ช่องว่างแคบลง
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                mb: 2,
                                maxWidth: "1000px", // กำหนด maxWidth ให้ grid ไม่กว้างเกินไป
                                mx: "auto", // ตั้งให้ grid อยู่ตรงกลาง
                            }}
                        >
                            <Grid item xs={6}>
                                <Typography variant="body2" className="inputHField">
                                    Tendor No
                                </Typography>
                                <HTextfield
                                    name="createdate"
                                    placeholder="Placeholder"
                                    width={"100%"}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" className="inputHField">
                                    Tendor Name
                                </Typography>
                                <HTextfield
                                    name="status"
                                    disabled 
                                    placeholder="Placeholder"
                                    defaultValue="0"
                                    width={"100%"}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" className="inputHField">
                                    Approver
                                </Typography>
                                <HSelect
                                    name="status"
                                    placeholder="Placeholder"
                                    defaultValue="0"
                                    width={"100%"}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" className="inputHField">
                                    Open All Store
                                </Typography>
                                <HSelect
                                    name="status"
                                    placeholder="Placeholder"
                                    defaultValue="0"
                                    width={"100%"}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" className="inputHField">
                                    Effective
                                </Typography>
                                <HDatePicker
                                    name="createdate"
                                    placeholder="Placeholder"
                                    width={"100%"}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" className="inputHField">
                                    End date
                                </Typography>
                                <HDatePicker
                                    name="createdate"
                                    placeholder="Placeholder"
                                    width={"100%"}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" className="inputHField">
                                    Remark
                                </Typography>
                                <HTextfield
                                    name="remark"
                                    multiline
                                    rows={4}  // กำหนดให้ช่องมีหลายบรรทัด
                                    width={"100%"}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </FormProvider>
            </Card>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2, // ระยะห่างระหว่างปุ่ม
                    mt: 3,  // ระยะห่างจาก Card
                }}
            >
                <CancelBtn />
                <SaveBtn />
            </Box>
        </div>
    );
};

export default ConfigPaymentMethod;

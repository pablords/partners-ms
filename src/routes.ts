
import express from "express"
import PartnerController from "@Controllers/PartnerController"
import ModalityController from "@Controllers/ModalityController"
import ContractController from "@Controllers/ContractController"
import RegisterController from "@Controllers/RegisterController"
import ContactController from "@Controllers/ContactController"
import { keycloak } from "@Infra/services/keycloak/config"
import AuthController from "@Controllers/AuthController"


export const router = express.Router()

router.post("/login", AuthController.login)
router.post("/user", AuthController.createUser)

router.use(keycloak.middleware({
  logout: "/logout",
  admin: "/"
}))

router.get("/contacts", keycloak.protect("view"), ContactController.getAllContacts)
router.get("/contact/:id", keycloak.protect("view"), ContactController.getContract)
router.post("/contact", keycloak.protect("edit"), ContactController.saveOneContact)
router.put("/contact/:id/update", keycloak.protect("edit"), ContactController.updateContact)
router.delete("/contact/:id/delete", keycloak.protect("delete"), ContactController.deleteContact)

router.get("/partners", keycloak.protect("view"), PartnerController.getAllPartners)
router.get("/partner/:id", keycloak.protect("view"), PartnerController.getPartner)
router.post("/partner", keycloak.protect("edit"), PartnerController.savePartner)
router.put("/partner/:id/update", keycloak.protect("edit"), PartnerController.updatePartner)
router.delete("/partner/:id/delete", keycloak.protect("delete"), PartnerController.deletePartner)

router.get("/modalities", keycloak.protect("view"), ModalityController.getAllModality)
router.get("/modality/:id", keycloak.protect("view"), ModalityController.getModality)
router.post("/modality", keycloak.protect("edit"), ModalityController.saveModality)
router.put("/modality/:id/update", keycloak.protect("edit"), ModalityController.updateModality)
router.delete("/modality/:id/delete", keycloak.protect("delete"), ModalityController.deleteModality)

router.get("/contracts", keycloak.protect("view"), ContractController.getAllContracts)
router.get("/contract/:id", keycloak.protect("view"), ContractController.getContract)
router.post("/contract/one", keycloak.protect("edit"), ContractController.saveOneContract)
router.put("/contract/:id/update", keycloak.protect("edit"), ContractController.updateContractStatus)
router.delete("/contract/:id/delete", keycloak.protect("delete"), ContractController.deleteContract)

router.get("/register/:partnerId", keycloak.protect("view"), RegisterController.getRegister)
router.post("/register", keycloak.protect("edit"), RegisterController.saveRegister)

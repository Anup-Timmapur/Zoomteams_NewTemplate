export class Designation {
    public constructor(
    public Id: number,
    public OrganizationId: number,
    public name: string,
    public description: string,
    public Isactive: boolean,
    public Createdby: number,
    public Createddate: Date,
    public Modifiedby: number,
    public Modifieddate: Date

    ) { }
    }
